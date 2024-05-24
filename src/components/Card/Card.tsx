import { Box, Truck } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IHampers } from "../../lib/interfaces/IHampers";
import { IProduct } from "../../lib/interfaces/IProducts";
import { ITransaction } from "../../lib/interfaces/ITransaction";
import { deleteHampers } from "../../lib/repository/HampersRepository";
import { deleteProduct } from "../../lib/repository/ProductRepository";
import { currencyConverter, dateConverter } from "../../lib/utils/converter";
import { TransactionStatusBadge } from "../Badge";
import { ProductWithImageList } from "../List/List";
import { PayModal } from "../Modal";

type CardProductProps = {
  product: IProduct;
};

type CardHampersProps = {
  hampers: IHampers;
};

type CardTransactionProps = {
  transaction: ITransaction;
};

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = () => {
    if (location.pathname.includes("admin/products")) {
      navigate(`/admin/products/edit/${product.id_produk}`);
    }
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteProduct(id);
        console.log(`Deleting product with ID ${id}`);
        modal.close();
      });

      const cancelDeleteBtn = document.getElementById(
        "cancel_delete"
      ) as HTMLButtonElement;
      cancelDeleteBtn.addEventListener("click", () => {
        modal.close();
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      <div className="flex justify-center items-center">
        <img
          className="h-50 aspect-square object-cover "
          src={product.foto}
          alt={product.nama_produk}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-black font-medium">
          {product.nama_produk}
        </h3>
        <p className="text-gray-600">{currencyConverter(product.harga)}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
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
                className="lucide lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleEdit}>Edit</button>
              </li>
              <li>
                <a onClick={() => handleDelete(product.id_produk)}>Delete</a>
              </li>
            </ul>

            <dialog id="my_modal_3" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to delete this products?
                </p>
                <div className="flex justify-end">
                  <form method="dialog" className="flex space-between gap-3">
                    <button id="cancel_delete">Cancel</button>
                    <button id="confirm_delete" className="btn btn-primary">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardHampers = (props: CardHampersProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin/hampers/edit/${props.hampers.hampers.id_produk}`);
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById(
      "delete_modal_hampers"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteHampers(id);
        modal.close();
      });

      const cancelDeleteBtn = document.getElementById(
        "cancel_delete"
      ) as HTMLButtonElement;
      cancelDeleteBtn.addEventListener("click", () => {
        modal.close();
      });
    }
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-50 object-cover"
        src={props.hampers.hampers.foto}
        alt={props.hampers.hampers.nama_produk}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">
          {props.hampers.hampers.nama_produk}
        </h3>
        <p className="text-gray-600 mb-4">
          {currencyConverter(props.hampers.hampers.harga)}
        </p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleEdit()}>Edit</a>
              </li>
              <li>
                <a
                  onClick={() => handleDelete(props.hampers.hampers.id_produk)}
                >
                  Delete
                </a>
              </li>
            </ul>

            <dialog id="delete_modal_hampers" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to delete this products?
                </p>
                <div className="flex justify-end">
                  <form method="dialog" className="flex space-between gap-3">
                    <button id="cancel_delete">Cancel</button>
                    <button id="confirm_delete" className="btn btn-primary">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardRecipe: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailRecipe = () => {
    navigate(`/admin/recipe/details/${product.id_produk}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      onClick={handleDetailRecipe}
      style={{ cursor: "pointer" }}
    >
      <img
        className="w-full h-50 object-cover"
        src={product.foto}
        alt={product.nama_produk}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.nama_produk}</h3>
        <p className="text-gray-600 mb-4">{product.deskripsi}</p>
      </div>
    </div>
  );
};

export const CardTransaction: React.FC<CardTransactionProps> = ({
  transaction,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-40 overflow-auto px-4 pt-4">
        {transaction.detail_transaksi.map((transactionDetail) => (
          <h3 className="text-lg font-medium mb-4">
            {transactionDetail.produk.nama_produk}
          </h3>
        ))}
      </div>
      <hr />
      <div className="p-4">
        <p className="text-gray-600 mb-4">{transaction.tanggal_nota_dibuat}</p>
        <p className="text-gray-600 mb-4">{transaction.jenis_pengiriman}</p>
        {transaction.status_transaksi === "Diterima" ? (
          <div className="badge badge-info">{transaction.status_transaksi}</div>
        ) : transaction.status_transaksi === "Ditolak" ? (
          <div className="badge badge-error">
            {transaction.status_transaksi}
          </div>
        ) : transaction.status_transaksi === "Diproses" ? (
          <div className="badge badge-warning">
            {transaction.status_transaksi}
          </div>
        ) : transaction.status_transaksi === "Selesai" ? (
          <div className="badge badge-success">
            {transaction.status_transaksi}
          </div>
        ) : (
          <div className="badge badge-default">
            {transaction.status_transaksi}
          </div>
        )}
      </div>
    </div>
  );
};

export const CardHistory = (props: CardTransactionProps) => {
  const handleOpenModal = () => {
    const dialog = document.getElementById("pay_modal")! as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <div className="card mt-5 w-full bg-base-100 relative">
      <div className="card-body border p-4">
        <div className="flex gap-2 items-center">
          <TransactionStatusBadge status={props.transaction.status_transaksi} />
          <p className="text-gray-500">
            {dateConverter(props.transaction.tanggal_nota_dibuat)}
          </p>
          <p className="text-right text-gray-500">
            {props.transaction.id_transaksi}
          </p>
        </div>
        <hr className="my-1 border-t-[1px] border-primary" />
        <div className="flex items-center">
          <div className="flex items-center">
            <Box size={16} className="text-primary mr-1" />
            <p className="">
              {props.transaction.detail_transaksi.length} items |
            </p>
          </div>
          <div className="flex items-center ml-1">
            <Truck size={16} className="text-secondary mr-1" />
            <p>{props.transaction.jenis_pengiriman}</p>
          </div>
        </div>
        <div>
          {props.transaction.detail_transaksi?.slice(0, 3).map((item) => (
            <ProductWithImageList detailTransaction={item} />
          ))}
        </div>
        {props.transaction.detail_transaksi.length > 3 && (
          <p className="text-center text-sm text-gray-500">
            And {props.transaction.detail_transaksi.length - 3} others..
          </p>
        )}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Purchases</p>
            <h2 className="text-xl font-bold">
              {currencyConverter(props.transaction.total)}
            </h2>
          </div>
          <button
            className="btn btn-sm btn-primary px-6 rounded-sm"
            onClick={() => handleOpenModal()}
          >
            Details
          </button>
        </div>
      </div>
      <PayModal data={props.transaction.pembayaran} />
    </div>
  );
};
