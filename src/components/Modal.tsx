import { useEffect, useState } from "react";
import { ITransaction } from "../lib/interfaces/ITransaction";
import { currencyConverter, dateConverter } from "../lib/utils/converter";
import { updateDeliveryRange } from "../lib/repository/TransactionRepository";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

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
          className={`input input-bordered ${
            isError && `border-error`
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
