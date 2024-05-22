import { useEffect, useState } from "react";
import { mutate } from "swr";
import { IPayment } from "../lib/interfaces/IPayment";
import { ITransaction } from "../lib/interfaces/ITransaction";
import {
  confirmTransaction,
  payTransaction,
} from "../lib/repository/PaymentRepository";
import {
  updateDeliveryRange,
  updateTransactionReady,
} from "../lib/repository/TransactionRepository";
import { currencyConverter, dateConverter } from "../lib/utils/converter";

type InputRangeModalProps = {
  data: ITransaction;
};

export const InputRangeModal = ({ data }: InputRangeModalProps) => {
  const [range, setRange] = useState<number | null>(null);

  const [fee, setFee] = useState<number>(10000);

  const [isError, setIsError] = useState<boolean>(false);

  const dialog = document.getElementById(
    "confirmation_modal_range_modal"
  )! as HTMLDialogElement;

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
      dialog.showModal();
    }, 300); //
  };

  const handleSubmit = () => {
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
      <ConfirmationModal onClick={handleSubmit} uniqueId="range_modal" />
    </dialog>
  );
};

type ConfirmationModalProps = {
  onClick: () => void;
  text?: string;
  uniqueId: string;
};

export const ConfirmationModal = ({
  onClick,
  text,
  uniqueId,
}: ConfirmationModalProps) => {
  return (
    <dialog id={`confirmation_modal_${uniqueId}`} className="modal">
      <div className="modal-box w-1/4">
        <h3 className="font-bold text-lg mb-4 text-center">Confirmation</h3>
        <p className="text-center">
          {text ??
            "This action will update the data. Are you sure want to continue?"}
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
  const dialog2 = document.getElementById(
    "confirmation_modal_pay_modal"
  )! as HTMLDialogElement;
  const handleSubmit = async () => {
    const dialog = document.getElementById("pay_modal")! as HTMLDialogElement;

    const formData = new FormData();
    formData.append("bukti_pembayaran", selectedFile as File);
    await payTransaction(formData, data.id_pembayaran);
    dialog2.close();
    dialog.close();
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleModalConfirmation = () => {
    setTimeout(() => {
      dialog2.showModal();
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
          <p className="text-center">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              name="bukti_pembayaran"
              onChange={handleFileUpload}
              required
            />
          </p>
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
      <ConfirmationModal onClick={handleSubmit} uniqueId="pay_modal" />
    </>
  );
};

type InputTotalPaymentModalProps = {
  data: ITransaction;
};

export const InputPaymentModal = ({ data }: InputTotalPaymentModalProps) => {
  const [amount, setAmount] = useState<number | null>(NaN);

  const [tips, setTips] = useState<number>(0);

  const [isNull, setIsNull] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const dialog = document.getElementById(
    "confirmation_modal_total_payment_modal"
  )! as HTMLDialogElement;

  const handleModalConfirmation = () => {
    if (Number.isNaN(amount)) {
      setIsNull(true);
      return;
    } else {
      setIsNull(false);
    }
    if (!isNull && !isInvalid) {
      setTimeout(() => {
        dialog.showModal();
      }, 300); //
    }
  };

  useEffect(() => {
    if (amount !== null) {
      if (amount > data.total) setTips(amount - data.total);
      else setTips(0);
    } else {
      setTips(0);
    }

    if (!Number.isNaN(amount)) {
      setIsNull(false);
    }
    if (amount! < data.total) {
      setIsInvalid(true);
      return;
    } else {
      setIsInvalid(false);
    }
  }, [amount]);

  const handleSubmit = () => {
    dialog.close();
    const dialog2 = document.getElementById(
      "total_payment_modal"
    )! as HTMLDialogElement;
    dialog2.close();
    const updateData = {
      total_pembayaran: amount!,
      tip: tips,
    };

    setTimeout(async () => {
      await confirmTransaction(updateData, data.pembayaran.id_pembayaran);
      mutate(`${import.meta.env.VITE_BASE_API}/transaksi-admin/todo`);
    }, 300); //
  };

  return (
    <dialog id="total_payment_modal" className="modal">
      <div className="modal-box w-1/2">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4 text-center">
          Input Total Payment
        </h3>
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
          <hr className="border-t-2 my-2 col-span-7" />

          <p className="col-span-2 mt-4">Payment Receipt</p>
          <div className="col-span-5 mt-4 flex items-start">
            :
            <img
              className="w-72 object-cover mx-auto "
              src={data.pembayaran.bukti_pembayaran}
              alt={data.pembayaran.id_pembayaran}
            />
          </div>
          <p className="col-span-2 mt-4 font-bold">Total</p>
          <p className="col-span-5 mt-4 font-bold">
            : {currencyConverter(data.total)}
          </p>
        </div>

        <div className="grid grid-cols-7">
          <p className="col-span-2 mb-2">Tips</p>
          <p className="col-span-5 mb-2">: {currencyConverter(tips)}</p>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className={`label-text ${isNull || (isInvalid && `text-error`)}`}
            >
              Paid Amount
            </span>
          </div>
          <label
            className={`input input-bordered ${
              isNull && `border-error`
            } flex items-center gap-2`}
          >
            <p className={`${isNull || (isInvalid && `text-error`)}`}>Rp</p>
            <input
              type="number"
              className="grow"
              placeholder="Enter Paid Amount"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </label>
        </label>

        {isNull && (
          <div className="flex justify-start">
            <span className="text-error">Must fill this field.</span>
          </div>
        )}
        {isInvalid && (
          <div className="flex justify-start">
            <span className="text-error">Enter the correct amount.</span>
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
      <ConfirmationModal
        onClick={handleSubmit}
        uniqueId="total_payment_modal"
      />
    </dialog>
  );
};

type DetailTransactionModalProps = {
  data: ITransaction;
};

export const DetailTransactionModal = ({
  data,
}: DetailTransactionModalProps) => {
  const handleModalConfirmation = () => {
    setTimeout(() => {
      const dialog = document.getElementById(
        "confirmation_modal_detail_transaction_modal"
      )! as HTMLDialogElement;
      dialog.showModal();
    }, 350); //
  };

  const handleSubmit = () => {
    const dialog = document.getElementById(
      "confirmation_modal_detail_transaction_modal"
    )! as HTMLDialogElement;
    dialog.close();
    const dialog2 = document.getElementById(
      "detail_transaction_modal"
    )! as HTMLDialogElement;
    dialog2.close();

    setTimeout(async () => {
      await updateTransactionReady(data.id_transaksi);
    }, 400); //
  };

  return (
    <>
      <dialog id="detail_transaction_modal" className="modal">
        <div className="modal-box w-1/2">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4 text-center">
            Transaction Details
          </h3>
          <div className="grid grid-cols-7">
            <p className="col-span-2 mb-4">Transaction ID</p>
            <p className="col-span-5 mb-4">: {data.id_transaksi}</p>
            <p className="col-span-2">Order Date</p>
            <p className="col-span-5">
              : {dateConverter(data.tanggal_nota_dibuat)}
            </p>
            <p className="col-span-2">Due Date</p>
            <p className="col-span-5">: {dateConverter(data.tanggal_ambil)}</p>
            <p className="col-span-2">Paid Date</p>
            <p className="col-span-5">
              : {dateConverter(data.pembayaran.tanggal_pembayaran)}
            </p>
            <p className="col-span-2">Confirm Date</p>
            <p className="col-span-5">
              : {dateConverter(data.pembayaran.tanggal_pembayaran_valid)}
            </p>
            <p className="col-span-2 mt-4">Customer</p>
            <p className="col-span-5 mt-4">: {data.customer.nama_customer}</p>
            <p className="col-span-2 ">Total</p>
            <p className="col-span-5 ">: {currencyConverter(data.total)}</p>
            <p className="col-span-2">Orders</p>
            <p className="col-span-5">:</p>
            {data.detail_transaksi.map((item) => (
              <p className="col-span-6 col-start-1 ml-3">
                - {item.produk.nama_produk} | {item.jumlah_item} pcs
              </p>
            ))}
          </div>
          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleModalConfirmation}
          >
            Confirm
          </button>
        </div>
      </dialog>
      <ConfirmationModal
        onClick={handleSubmit}
        text="Are you sure want to update this transaction to ready?"
        uniqueId="detail_transaction_modal"
      />
    </>
  );
};
