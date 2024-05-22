import {
  Check,
  ChevronRight,
  CircleMinus,
  CirclePlus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ICart } from "../../lib/interfaces/ICart";
import { ICustomer } from "../../lib/interfaces/ICustomer";
import { IEmployee } from "../../lib/interfaces/IEmployee";
import { IIngredientPurchase } from "../../lib/interfaces/IIngredientPurchase";
import { IIngredients } from "../../lib/interfaces/IIngredients";
import { IOtherExpenses } from "../../lib/interfaces/IOtherExpenses";
import { IPartner } from "../../lib/interfaces/IPartner";
import { ITransaction } from "../../lib/interfaces/ITransaction";
import { deleteEmployee } from "../../lib/repository/EmployeeRepository";
import { deleteIngredientPurchase } from "../../lib/repository/IngredientPurchaseRepository";
import { deleteIngredient } from "../../lib/repository/IngredientsRepository";
import { deleteOtherExpenses } from "../../lib/repository/OtherExpensesRepository";
import { deletePartner } from "../../lib/repository/PartnerRepository";
import {
  currencyConverter,
  dateConverterSimple,
} from "../../lib/utils/converter";
import { TransactionStatusBadge } from "../Badge";

type IngredientsTableProps = {
  ingredientsData: IIngredients[];
};

type EmployeeTableProps = {
  employeeData: IEmployee[];
};

type PartnerTableProps = {
  partnerData: IPartner[];
};

type IngredientPurchaseTableProps = {
  ingredientPurhaseData: IIngredientPurchase[];
};

type OtherExpensesTableProps = {
  otherExpensesData: IOtherExpenses[];
};

type CustomersTableProps = {
  customersData: ICustomer[];
};

export const IngredientsTable = (props: IngredientsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.ingredientsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderTableRows = () => {
    return currentItems.map((item) => (
      <tr key={item.id_bahan_baku}>
        <td>{item.nama_bahan_baku}</td>
        <td>{item.stok}</td>
        <td>{item.min_stok}</td>
        <td>{item.satuan}</td>
        <td>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-xs">
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
                <a onClick={() => handleEditConfirmation(item.id_bahan_baku)}>
                  Edit
                </a>
              </li>
              <li>
                <a onClick={() => handleDelete(item.id_bahan_baku)}>Delete</a>
              </li>
            </ul>

            <dialog id="my_modal_3" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to delete this ingredient?
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

            <dialog id="edit_modal" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to edit this ingredient?
                </p>
                <div className="flex justify-end">
                  <form method="dialog" className="flex space-between gap-3">
                    <button id="cancel_edit">Cancel</button>
                    <button id="confirm_edit" className="btn btn-primary">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </td>
      </tr>
    ));
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteIngredient(id);
        console.log(`Deleting ingredient with ID ${id}`);
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

  const handleEditConfirmation = (id: string) => {
    const modal = document.getElementById("edit_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmEditBtn = document.getElementById(
        "confirm_edit"
      ) as HTMLButtonElement;
      confirmEditBtn.addEventListener("click", () => {
        navigate(`/admin/ingredients/edit/${id}`);
        modal.close();
      });

      const cancelEditBtn = document.getElementById(
        "cancel_edit"
      ) as HTMLButtonElement;
      cancelEditBtn.addEventListener("click", () => {
        modal.close();
      });
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(props.ingredientsData.length / itemsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="xl:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Ingredients Name</th>
            <th>Stocks</th>
            <th>Minimal Stocks</th>
            <th>Units</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

export const EmployeeTable = (props: EmployeeTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.employeeData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const navigate = useNavigate();
  const location = useLocation();

  const renderTableRows = () => {
    return currentItems.map((item, index) => (
      <tr key={index}>
        <td>{item.nama_karyawan}</td>
        <td>{item.gaji_karyawan}</td>
        <td>{item.bonus_gaji_karyawan}</td>
        <td>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-xs">
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
              {location.pathname.includes("mo/employee") && (
                <>
                  <li>
                    <a onClick={() => handleEdit(item.id_karyawan)}>Edit</a>
                  </li>
                  <li>
                    <a onClick={() => handleDelete(item.id_karyawan)}>Delete</a>
                  </li>
                </>
              )}
              {location.pathname.includes("owner/employees") && (
                <li>
                  <a onClick={() => handleEdit(item.id_karyawan)}>Edit</a>
                </li>
              )}
            </ul>

            <dialog id="my_modal_3" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to delete this employee?
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

            <dialog id="edit_modal" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to edit this employee?
                </p>
                <div className="flex justify-end">
                  <form method="dialog" className="flex space-between gap-3">
                    <button id="cancel_edit">Cancel</button>
                    <button id="confirm_edit" className="btn btn-primary">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </td>
      </tr>
    ));
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteEmployee(id);
        console.log(`Deleting employee with ID ${id}`);
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

  const handleEdit = (itemId: string) => {
    if (location.pathname.includes("mo/employee")) {
      navigate(`/mo/employee/edit/${itemId}`);
    } else if (location.pathname.includes("owner/employee")) {
      navigate(`/owner/employee/edit/${itemId}`);
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(props.employeeData.length / itemsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="lg:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Bonus Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

export const PartnerTable = (props: PartnerTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.partnerData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const navigate = useNavigate();

  const renderTableRows = () => {
    return currentItems.map((item, index) => (
      <tr key={index}>
        <td>{item.nama_penitip}</td>
        <td>{item.alamat_penitip}</td>
        <td>{item.telp_penitip}</td>
        <td>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-xs">
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
                <a onClick={() => handleEdit(item.id_penitip)}>Edit</a>
              </li>
              <li>
                <a onClick={() => handleDelete(item.id_penitip)}>Delete</a>
              </li>
            </ul>

            <dialog id="my_modal_3" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to delete this partner?
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

            <dialog id="edit_modal" className="modal" hidden>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">
                  Are you sure you want to edit this partner?
                </p>
                <div className="flex justify-end">
                  <form method="dialog" className="flex space-between gap-3">
                    <button id="cancel_edit">Cancel</button>
                    <button id="confirm_edit" className="btn btn-primary">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </td>
      </tr>
    ));
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deletePartner(id);
        console.log(`Deleting partner with ID ${id}`);
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

  const handleEdit = (itemId: string) => {
    if (location.pathname.includes("mo/partner")) {
      navigate(`/mo/partner/edit/${itemId}`);
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(props.partnerData.length / itemsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="lg:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Partner Name</th>
            <th>Partner Address</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

export const IngredientPurchaseTable = (
  props: IngredientPurchaseTableProps
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.ingredientPurhaseData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderTableRows = () => {
    return currentItems.map((item, index) => {
      const [date] = item.tanggal_pembelian.split(" ");
      return (
        <tr key={index}>
          <td>{date}</td>
          <td>{item.jumlah_pembelian}</td>
          <td>{item.harga_beli}</td>
          <td>{item.bahan_baku.nama_bahan_baku}</td>
          <td>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-xs">
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
                  <a onClick={() => handleEdit(item.id_pembelian_bahan_baku)}>
                    Edit
                  </a>
                </li>
                <li>
                  <a onClick={() => handleDelete(item.id_pembelian_bahan_baku)}>
                    Delete
                  </a>
                </li>
              </ul>

              <dialog id="my_modal_3" className="modal" hidden>
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Confirmation</h3>
                  <p className="py-4">
                    Are you sure you want to delete this ingredient purchase?
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
          </td>
        </tr>
      );
    });
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteIngredientPurchase(id);
        console.log(`Deleting ingredient purhcase with ID ${id}`);
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

  const handleEdit = (itemId: string) => {
    if (location.pathname.includes("mo/ingredient-purchase")) {
      navigate(`/mo/ingredient-purchase/edit/${itemId}`);
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(
    props.ingredientPurhaseData.length / itemsPerPage
  );
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="xl:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Date Of Purchase</th>
            <th>Purchase Quantity</th>
            <th>Purchase Price</th>
            <th>Ingredient</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

export const OtherExpensesTable = (props: OtherExpensesTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.otherExpensesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderTableRows = () => {
    return currentItems.map((item, index) => {
      const [date] = item.tanggal_pengeluaran.split(" ");

      return (
        <tr key={index}>
          <td>{item.nama_pengeluaran}</td>
          <td>{date}</td>
          <td>{item.total_pengeluaran}</td>
          <td>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-xs">
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
                  <a onClick={() => handleEdit(item.id_pengeluaran_lain_lain)}>
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleDelete(item.id_pengeluaran_lain_lain)}
                  >
                    Delete
                  </a>
                </li>
              </ul>

              <dialog id="my_modal_3" className="modal" hidden>
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Confirmation</h3>
                  <p className="py-4">
                    Are you sure you want to delete this other expense?
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
          </td>
        </tr>
      );
    });
  };

  const handleDelete = (id: string) => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const confirmDeleteBtn = document.getElementById(
        "confirm_delete"
      ) as HTMLButtonElement;
      confirmDeleteBtn.addEventListener("click", () => {
        deleteOtherExpenses(id);
        console.log(`Deleting other expense with ID ${id}`);
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

  const handleEdit = (itemId: string) => {
    if (location.pathname.includes("mo/other-expenses")) {
      navigate(`/mo/other-expenses/edit/${itemId}`);
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(props.otherExpensesData.length / itemsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="xl:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Date</th>
            <th>Total Other Expenses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

export const CustomersTable = (props: CustomersTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.customersData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderTableRows = () => {
    return currentItems.map((item, index) => (
      <tr key={index}>
        <td>{item.nama_customer}</td>
        <td>{item.tanggal_lahir}</td>
        <td>{item.no_telp}</td>
        <td>{item.poin}</td>
        <td>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-xs">
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
                <a onClick={() => handleHistory(item.id_customer)}>
                  See History Order
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    ));
  };

  const handleHistory = (itemId: string) => {
    if (location.pathname.includes("admin/customer")) {
      navigate(`/admin/customer/order-history/${itemId}`);
    }
  };

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(props.customersData.length / itemsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <button
        key={i}
        className={`join-item btn btn-sm justify ${
          currentPage === i ? "btn-active" : ""
        }`}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="xl:overflow-x-hidden">
      <table className="table table-zebra w-full mb-5">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Birth of Date</th>
            <th>Phone Number</th>
            <th>Poin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <div className="join flex justify-center mt-4">{paginationItems}</div>
    </div>
  );
};

type AdminTaskTableProps = {
  data: ITransaction[];
  onClick: (index: number) => void;
};

export const AdminTaskTable = ({ data, onClick }: AdminTaskTableProps) => {
  return (
    <div className="overflow-x-hidden">
      <table className="table">
        {/* head */}
        <thead className="bg-gray-200 font-bold text-sm text-black">
          <tr>
            <th>#</th>
            <th>Order Date</th>
            <th>QTY</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <th>{item.id_transaksi}</th>
              <td>{dateConverterSimple(item.tanggal_nota_dibuat)}</td>
              <td>{item.detail_transaksi.length}</td>
              <td>{item.customer.nama_customer}</td>
              <td>{item.total}</td>
              <td>
                <TransactionStatusBadge status={item.status_transaksi} />
              </td>
              <td>
                <a
                  className="btn btn-circle btn-sm"
                  onClick={() => onClick(index)}
                >
                  <ChevronRight size={14} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type CartTableProps = {
  cartData: ICart[];
  onAdd: (id: number, date: string) => void;
  onRemove: (id: number, date: string) => void;
  onMinus: (id: number, date: string) => void;
};

export const CartTable = ({
  cartData,
  onAdd,
  onMinus,
  onRemove,
}: CartTableProps) => {
  return (
    <div className="overflow-x-auto my-8">
      <table className="table ">
        {/* head */}
        <thead className="bg-primary-lighter">
          <tr className="text-center font-bold text-black font-serif text-lg">
            <th>Product</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {cartData.map((item) => (
            <tr className="border-b-[1px] border-gray-300">
              <td className="">
                <div className="col-start-2 flex items-center">
                  <img
                    src={item.produk.foto}
                    alt={item.produk.nama_produk}
                    className="w-16 h-16 object-cover"
                  />
                  <span className="ml-4 font-semibold">
                    {item.produk.nama_produk}
                  </span>
                </div>
              </td>
              <td className="text-center">
                {currencyConverter(item.produk.harga)}
              </td>
              <td className="text-center mx-auto">
                {item.jumlah_item_keranjang} of {item.produk.stok}
              </td>
              <td className="text-center">
                {currencyConverter(
                  item.jumlah_item_keranjang * item.produk.harga
                )}
              </td>
              <td className="text-center">
                <button
                  className="mr-2"
                  onClick={() => {
                    onMinus(item.id_keranjang, item.tanggal_keranjang);
                  }}
                >
                  <CircleMinus className="text-primary" />
                </button>
                <button
                  className="mr-2"
                  onClick={() => {
                    onRemove(item.id_keranjang, item.tanggal_keranjang);
                  }}
                >
                  <Trash2 className="text-red-400" />
                </button>
                <button
                  onClick={() =>
                    onAdd(item.id_keranjang, item.tanggal_keranjang)
                  }
                >
                  <CirclePlus className="text-primary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type AdminOnProcessTableProps = {
  data: ITransaction[];
  onClick: (index: number) => void;
};

export const AdminOnProcessTable = ({
  data,
  onClick,
}: AdminOnProcessTableProps) => {
  return (
    <div className="overflow-x-hidden">
      <table className="table">
        {/* head */}
        <thead className="bg-secondary-light font-bold text-sm text-black">
          <tr>
            <th>#</th>
            <th>Order Date</th>
            <th>Due Date</th>
            <th>Customer</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <th>{item.id_transaksi}</th>
              <td>{dateConverterSimple(item.tanggal_nota_dibuat)}</td>
              <td>{dateConverterSimple(item.tanggal_ambil)}</td>
              <td>{item.customer.nama_customer}</td>
              <td>{currencyConverter(item.total)}</td>
              <td>
                <a
                  className="btn btn-circle btn-sm bg-primary-lighter"
                  onClick={() => onClick(index)}
                >
                  <Check size={14} className="text-primary" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
