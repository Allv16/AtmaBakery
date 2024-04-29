import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const IngredientsTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const ingredientsData = [
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },
        { name: 'Tepung Terigu', stocks: 500, unit: 'Kg', latestUpdate: 'Apr 24, 2024' },

    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ingredientsData.slice(indexOfFirstItem, indexOfLastItem);

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.stocks}</td>
                <td>{item.unit}</td>
                <td>{item.latestUpdate}</td>
                <td>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/edit-ingredients">
                                <li><a>Edit</a></li>
                            </Link>
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        ));
    };

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(ingredientsData.length / itemsPerPage);
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
        <div className="overflow-x-hidden overflow-y-auto">
            <table className="table table-zebra w-full mb-5">
                <thead>
                    <tr>
                        <th>Ingredients Name</th>
                        <th>Stocks</th>
                        <th>Units</th>
                        <th>Latest Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
            <div className="join flex justify-center mt-4">{paginationItems}</div>
        </div>
    );
};

export const EmployeeTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const employeeData = [
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employeeData.slice(indexOfFirstItem, indexOfLastItem);

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.employeeName}</td>
                <td>{item.attendance}</td>
                <td>{item.absence}</td>
                <td>{item.salary}</td>
                <td>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/edit-employee">
                                <li><a>Edit</a></li>
                            </Link>
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        ));
    };

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(employeeData.length / itemsPerPage);
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
        <div className="lg:overflow-x-hidden lg:overflow-y-hidden">
            <table className="table table-zebra w-full mb-5">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Total Attendance</th>
                        <th>Number of Absences</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
            <div className="join flex justify-center mt-4">{paginationItems}</div>
        </div>
    );
};

export const PartnerTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const partnerData = [
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
        { partnerName: 'Ryan Pratama', product: '30', stocks: '4', price: '2000000' },
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = partnerData.slice(indexOfFirstItem, indexOfLastItem);

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.partnerName}</td>
                <td>{item.product}</td>
                <td>{item.stocks}</td>
                <td>{item.price}</td>
                <td>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/edit-partner">
                                <li><a>Edit</a></li>
                            </Link>
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        ));
    };

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(partnerData.length / itemsPerPage);
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
        <div className="lg:overflow-x-hidden lg:overflow-y-hidden">
            <table className="table table-zebra w-full mb-5">
                <thead>
                    <tr>
                        <th>Partner Name</th>
                        <th>Product</th>
                        <th>Stocks</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
            <div className="join flex justify-center mt-4">{paginationItems}</div>
        </div>
    );
};

export const OwnerEmployeeTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const employeeData = [
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
        { employeeName: 'Ryan Pratama', attendance: '30', absence: '4', salary: '2000000' },
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employeeData.slice(indexOfFirstItem, indexOfLastItem);

    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.employeeName}</td>
                <td>{item.attendance}</td>
                <td>{item.absence}</td>
                <td>{item.salary}</td>
                <td>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/edit-owner-employee">
                                <li><a>Edit</a></li>
                            </Link>
                            <li><a>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        ));
    };

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(employeeData.length / itemsPerPage);
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
        <div className="lg:overflow-x-hidden lg:overflow-y-hidden">
            <table className="table table-zebra w-full mb-5">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Total Attendance</th>
                        <th>Number of Absences</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
            <div className="join flex justify-center mt-4">{paginationItems}</div>
        </div>
    );
};