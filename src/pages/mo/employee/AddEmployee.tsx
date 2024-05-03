import React, { useState } from 'react';
import { EmployeeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';
import { addEmployee } from "../../../lib/repository/EmployeeRepository";

const AddEmployee: React.FC = () => {
    const inputField = {
        nama_karyawan: "",
        gaji_karyawan: "",
        bonus_gaji_karyawan: "",
    };

    const [input, setInput] = useState(inputField);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addEmployee(input);
    };

    return (
        <MOWrapper>
            <EmployeeBreadcrumb pageName="Add New Employee" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Employee Name</label>
                        <input type="text" placeholder="Enter Employee Name" className="input w-full max-w-md" name="nama_karyawan" onChange={handleChange} required />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Salary</label>
                        <input type="number" placeholder="Enter Salary" className="input w-full max-w-md" min="0" name="gaji_karyawan" onChange={handleChange} required />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Bonus Salary</label>
                        <input type="number" placeholder="Enter Bonus Salary" className="input w-full max-w-md" min="0" name="bonus_gaji_karyawan" onChange={handleChange} required />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary" type="submit">Add Employee</button>
                    </div>
                </form>
            </div>
        </MOWrapper>
    );
};

export default AddEmployee;
