import { useEffect, useState } from "react";
import { ITransaction } from "../lib/interfaces/ITransaction";
import { currencyConverter, dateConverter } from "../lib/utils/converter";
import { updateDeliveryRange } from "../lib/repository/TransactionRepository";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";
import { payTransaction } from "../lib/repository/PaymentRepository";
import { IPayment } from "../lib/interfaces/IPayment";

type InputRangeModalProps = {
  data: ITransaction;
};

export const InputRangeModal = ({ data }: InputRangeModalProps) => {
  const navigate = useNavigate();

  const [range, setRange] = useState<number | null>(null);

  const [fee, setFee] = useState<number>(10000);

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (range !== null) {
      if (range < 5) {
        setFee(10000);
      } else if (range >= 5 && range < 10) {
        setFee(15000);
      } else if (range >= 10 && range < 15) {
        setFee(20000);
      } else if (range >= 5) {
        setFee(25000);
      }
    } else {
      setFee(0);
    }
  }, [range]);

  const handleModalConfirmation = () => {
    if (range === null) {
      setIsError(true);
      return;
    }
    setTimeout(() => {
      const dialog = document.getElementById(
        "confirmation_modal"
      )! as HTMLDialogElement;
      dialog.showModal();
    }, 300); //
  };

  const handleSubmit = () => {
    const dialog = document.getElementById(
      "confirmation_modal"
    )! as HTMLDialogElement;
    dialog.close();
    const dialog2 = document.getElementById(
      "range_modal"
    )! as HTMLDialogElement;
    dialog2.close();
    setTimeout(async () => {
      await updateDeliveryRange(data.id_transaksi, range!, fee);
      mutate(`${import.meta.env.VITE_BASE_API}/transaksi-admin`);
    }, 300); //
  };

  return (
    <dialog id="range_modal" className="modal">
      <div className="modal-box w-1/2">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4 text-center">Input Range</h3>
        <div className="grid grid-cols-7">
          <p className="col-span-2">Transaction ID</p>
          <p className="col-span-5">: {data.id_transaksi}</p>
          <p className="col-span-2">Order Date</p>
          <p className="col-span-5">
            : {dateConverter(data.tanggal_nota_dibuat)}
          </p>
          <p className="col-span-2">Due Date</p>
          <p className="col-span-5">: {dateConverter(data.tanggal_ambil)}</p>
          <p className="col-span-2">Customer</p>
          <p className="col-span-5">: {data.customer.nama_customer}</p>
          <p className="col-span-2">Orders</p>
          <p className="col-span-5">:</p>
          {data.detail_transaksi.map((item) => (
            <p className="col-span-6 col-start-1 ml-3">
              - {item.produk.nama_produk} | {item.jumlah_item} pcs
            </p>
          ))}

          <p className="col-span-2 mt-4">Total</p>
          <p className="col-span-5 mt-4">: {currencyConverter(data.total)}</p>
          <p className="col-span-2 font-bold">Address</p>
          <p className="col-span-5 font-bold">
            : {data.pengiriman.alamat_tujuan}
          </p>
        </div>

        <hr className="border-t-2 my-2" />
        <div className="grid grid-cols-7">
          <p className="col-span-2 mb-2">Delivery Fee</p>
          <p className="col-span-5 mb-2">: {currencyConverter(fee)}</p>
        </div>

        <label
          className={`input input-bordered ${isError && `border-error`
            } flex items-center gap-2`}
        >
          <input
            type="number"
            className="grow"
            placeholder="Enter range by given address"
            onChange={(e) => setRange(parseFloat(e.target.value))}
          />
          km
        </label>
        {isError && (
          <div className="flex justify-end">
            <span className="text-error">Must fill this field.</span>
          </div>
        )}
        <div className="flex justify-end mt-6">
          <button
            className="btn btn-primary w-1/4"
            onClick={() => handleModalConfirmation()}
          >
            Save
          </button>
        </div>
      </div>
      <ConfirmationModal onClick={handleSubmit} />
    </dialog>
  );
};

type ConfirmationModalProps = {
  onClick: () => void;
};

export const ConfirmationModal = ({ onClick }: ConfirmationModalProps) => {
  return (
    <dialog id="confirmation_modal" className="modal">
      <div className="modal-box w-1/4">
        <h3 className="font-bold text-lg mb-4 text-center">Confirmation</h3>
        <p className="text-center">
          This action will update the data. Are you sure want to continue?
        </p>
        <div className="flex justify-between mx-16 mt-4">
          <form method="dialog">
            <button className="btn bg-gray-100">Cancel</button>
          </form>
          <button className="btn btn-primary w-1/2" onClick={() => onClick()}>
            Continue
          </button>
        </div>
      </div>
    </dialog>
  );
};

type PayModalProps = {
  data: IPayment;
};

export const PayModal: React.FC<PayModalProps> = ({ data }) => {
  const inputField = {
    bukti_pembayaran: "",
  };

  const [input, setInput] = useState(inputField);

  const handleSubmit = async () => {
    const dialog = document.getElementById("pay_modal")! as HTMLDialogElement;
    const dialog2 = document.getElementById(
      "confirmation_modal"
    )! as HTMLDialogElement;
    const formData = new FormData();
    formData.append("bukti_pembayaran", selectedFile as File);
    await payTransaction(formData, data.id_pembayaran);
    dialog2.close();
    dialog.close();
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleModalConfirmation = () => {
    setTimeout(() => {
      const dialog = document.getElementById(
        "confirmation_modal"
      )! as HTMLDialogElement;
      dialog.showModal();
    }, 300); //
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const uploadedFile = files[0];
      setSelectedFile(uploadedFile);
    }
  };

  return (
    <>
      <dialog id="pay_modal" className="modal">
        <div className="modal-box w-1/4">
          <h3 className="font-bold text-lg mb-4 text-center">
            Upload Transfer Receipt
          </h3>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cloud-upload"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">
                  {selectedFile ? selectedFile.name : "Click to upload"}
                </span>
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="bukti_pembayaran"
              onChange={handleFileUpload}
              required
            />
          </label>
          <div className="flex justify-between mx-16 mt-4">
            <form method="dialog">
              <button className="btn bg-gray-100">Cancel</button>
            </form>
            <button
              className="btn btn-primary w-1/2"
              onClick={() => handleModalConfirmation()}
            >
              Pay
            </button>
          </div>
        </div>
      </dialog>
      <ConfirmationModal onClick={handleSubmit} />
    </>
  );
};
