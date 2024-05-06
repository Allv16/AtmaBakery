/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IIngredients } from '../../lib/interfaces/IIngredients';
import { IEmployee } from '../../lib/interfaces/IEmployee';
import { IPartner } from '../../lib/interfaces/IPartner';
import { useLocation, useNavigate } from "react-router-dom";
import { deleteIngredient } from '../../lib/repository/IngredientsRepository';
import { deleteEmployee } from '../../lib/repository/EmployeeRepository';
import { deletePartner } from '../../lib/repository/PartnerRepository';

type IngredientsTableProps = {
    ingredientsData: IIngredients[];
};

type EmployeeTableProps = {
    employeeData: IEmployee[];
};

type PartnerTableProps = {
    partnerData: IPartner[];
}

export const IngredientsTable = (props: IngredientsTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = props.ingredientsData.slice(indexOfFirstItem, indexOfLastItem);

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a onClick={() => handleEditConfirmation(item.id_bahan_baku)}>Edit</a>
                            </li>
                            <li>
                                <a onClick={() => handleDelete(item.id_bahan_baku)}>Delete</a>
                            </li>
                        </ul>

                        <dialog id="my_modal_3" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to delete this ingredient?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_delete">Cancel</button>
                                        <button id="confirm_delete" className="btn btn-primary">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <dialog id="edit_modal" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to edit this ingredient?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_edit">Cancel</button>
                                        <button id="confirm_edit" className="btn btn-primary">Edit</button>
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
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmDeleteBtn = document.getElementById('confirm_delete') as HTMLButtonElement;
            confirmDeleteBtn.addEventListener('click', () => {
                deleteIngredient(id);
                console.log(`Deleting ingredient with ID ${id}`);
                modal.close();
            });

            const cancelDeleteBtn = document.getElementById('cancel_delete') as HTMLButtonElement;
            cancelDeleteBtn.addEventListener('click', () => {
                modal.close();
            });
        }
    };

    const handleEditConfirmation = (id: string) => {
        const modal = document.getElementById('edit_modal') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmEditBtn = document.getElementById('confirm_edit') as HTMLButtonElement;
            confirmEditBtn.addEventListener('click', () => {
                navigate(`/edit-ingredients/${id}`);
                modal.close();
            });

            const cancelEditBtn = document.getElementById('cancel_edit') as HTMLButtonElement;
            cancelEditBtn.addEventListener('click', () => {
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
                className={`join-item btn btn-sm justify ${currentPage === i ? 'btn-active' : ''}`}
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
    const currentItems = props.employeeData.slice(indexOfFirstItem, indexOfLastItem);

    const navigate = useNavigate()
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleEditConfirmation(item.id_karyawan)}>Edit</a></li>
                            <li><a onClick={() => handleDelete(item.id_karyawan)}>Delete</a></li>
                        </ul>

                        <dialog id="my_modal_3" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to delete this employee?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_delete">Cancel</button>
                                        <button id="confirm_delete" className="btn btn-primary">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <dialog id="edit_modal" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to edit this employee?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_edit">Cancel</button>
                                        <button id="confirm_edit" className="btn btn-primary">Edit</button>
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
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmDeleteBtn = document.getElementById('confirm_delete') as HTMLButtonElement;
            confirmDeleteBtn.addEventListener('click', () => {
                deleteEmployee(id);
                console.log(`Deleting employee with ID ${id}`);
                modal.close();
            });

            const cancelDeleteBtn = document.getElementById('cancel_delete') as HTMLButtonElement;
            cancelDeleteBtn.addEventListener('click', () => {
                modal.close();
            });
        }
    };

    const handleEdit = (itemId: string) => {
        if (location.pathname.includes('mo-employee')) {
            navigate(`/edit-employee/${itemId}`);
        } else if (location.pathname.includes('owner-employee')) {
            navigate(`/edit-owner-employee/${itemId}`);
        }
    };

    const handleEditConfirmation = (id: string) => {
        const modal = document.getElementById('edit_modal') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmEditBtn = document.getElementById('confirm_edit') as HTMLButtonElement;
            confirmEditBtn.addEventListener('click', () => {
                handleEdit(id);
                modal.close();
            });

            const cancelEditBtn = document.getElementById('cancel_edit') as HTMLButtonElement;
            cancelEditBtn.addEventListener('click', () => {
                modal.close();
            });
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
                className={`join-item btn btn-sm justify ${currentPage === i ? 'btn-active' : ''}`}
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
    const currentItems = props.partnerData.slice(indexOfFirstItem, indexOfLastItem);

    const navigate = useNavigate()

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.nama_penitip}</td>
                <td>{item.alamat_penitip}</td>
                <td>{item.telp_penitip}</td>
                <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a onClick={() => handleEditConfirmation(item.id_penitip)}>Edit</a>
                            </li>
                            <li><a onClick={() => handleDelete(item.id_penitip)}>Delete</a></li>
                        </ul>

                        <dialog id="my_modal_3" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to delete this partner?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_delete">Cancel</button>
                                        <button id="confirm_delete" className="btn btn-primary">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <dialog id="edit_modal" className="modal" hidden>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Confirmation</h3>
                                <p className="py-4">Are you sure you want to edit this partner?</p>
                                <div className="flex justify-end">
                                    <form method="dialog" className="flex space-between gap-3">
                                        <button id="cancel_edit">Cancel</button>
                                        <button id="confirm_edit" className="btn btn-primary">Edit</button>
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
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmDeleteBtn = document.getElementById('confirm_delete') as HTMLButtonElement;
            confirmDeleteBtn.addEventListener('click', () => {
                deletePartner(id);
                console.log(`Deleting partner with ID ${id}`);
                modal.close();
            });

            const cancelDeleteBtn = document.getElementById('cancel_delete') as HTMLButtonElement;
            cancelDeleteBtn.addEventListener('click', () => {
                modal.close();
            });
        }
    };

    const handleEditConfirmation = (id: string) => {
        const modal = document.getElementById('edit_modal') as HTMLDialogElement;
        if (modal) {
            modal.showModal();

            const confirmEditBtn = document.getElementById('confirm_edit') as HTMLButtonElement;
            confirmEditBtn.addEventListener('click', () => {
                navigate(`/edit-partner/${id}`);
                modal.close();
            });

            const cancelEditBtn = document.getElementById('cancel_edit') as HTMLButtonElement;
            cancelEditBtn.addEventListener('click', () => {
                modal.close();
            });
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
                className={`join-item btn btn-sm justify ${currentPage === i ? 'btn-active' : ''}`}
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