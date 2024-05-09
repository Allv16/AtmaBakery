import React from "react";
import { IProduct } from "../../lib/interfaces/IProducts";
import { IHampers } from "../../lib/interfaces/IHampers";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../lib/repository/ProductRepository";
import { deleteHampers } from "../../lib/repository/HampersRepository";
import { ITransaction } from "../../lib/interfaces/ITransaction";
import { IHistory } from "../../lib/interfaces/IHistory";

type CardProductProps = {
  product: IProduct;
};

type CardHampersProps = {
  hampers: IHampers;
};

type CardTransactionProps = {
  transaction: ITransaction;
}

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = () => {
    if (location.pathname.includes("admin-products")) {
      navigate(`/edit-products/${product.id_produk}`);
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
        <p className="text-gray-600">{product.harga}</p>
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
    navigate(`/edit-hampers/${props.hampers.hampers.id_produk}`);
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
        <p className="text-gray-600 mb-4">{props.hampers.hampers.harga}</p>
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
    navigate(`/detail-recipe/${product.id_produk}`);
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

export const CardTransaction: React.FC<CardTransactionProps> = ({ transaction }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="h-40 overflow-auto px-4 pt-4">
        {transaction.detail_transaksi.map(
          (transactionDetail) => (
            <h3 className="text-lg font-medium mb-4">{transactionDetail.produk.nama_produk}</h3>
          )
        )}
      </div>
      <hr />
      <div className="p-4">
        <p className="text-gray-600 mb-4">{transaction.tanggal_nota_dibuat}</p>
        <p className="text-gray-600 mb-4">{transaction.jenis_pengiriman}</p>
        {transaction.status_transaksi === 'Diterima' ? (
          <div className="badge badge-info">
            {transaction.status_transaksi}
          </div>
        ) : transaction.status_transaksi === 'Ditolak' ? (
          <div className="badge badge-error">
            {transaction.status_transaksi}
          </div>
        ) : transaction.status_transaksi === 'Di Proses' ? (
          <div className="badge badge-warning">
            {transaction.status_transaksi}
          </div>
        ) : transaction.status_transaksi === 'Selesai' ? (
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
export const CardHistory = ({ history }: { history: IHistory }) => {
  const tanggal = history.tanggal_diterima.split(" ")[0] || history.tanggal_ditolak.split(" ")[0];
  const formattedDate = new Date(tanggal).toLocaleDateString('en-GB');
  return (
    <div className="card mt-5 w-full bg-base-100 relative">
      <div className="card-body border relative">
        <div className="relative">
          <p className="inline-block">{formattedDate}</p>
          <span className={`absolute top-0 right-0 px-2 py-1 rounded ${history.status_transaksi === 'Selesai' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {history.status_transaksi}
          </span>

        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
        <div className="flex items-center">
          {/* <img
            src="path/to/small_box_image.png"
            alt="Small Box"
            className="w-8 h-8 mr-2"
          /> */}
          <div>
            <h2 className="text-xl font-bold">Order History</h2>
            <p className="mb-2">{`Jumlah Item: ${history.detail_transaksi?.length}`}</p>
            {history.detail_transaksi?.map((item) => (
              <p>{"- "}{item.produk.nama_produk}</p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p>Total Purchases:</p>
            <h2 className="text-xl font-bold">{`Rp. ${history.total}`}</h2>
          </div>
          <button className="bg-amber-200 text-yellow-800 px-4 py-2 rounded">
            Details
          </button>
        </div>
      </div >
    </div >
  );
};
