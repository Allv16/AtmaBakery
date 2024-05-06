import React, { useEffect, useState } from 'react';
import { EmployeeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';
import { IEmployee } from '../../../lib/interfaces/IEmployee';
import { editEmployee, getEmployeeById } from '../../../lib/repository/EmployeeRepository';
import { useParams, useNavigate } from 'react-router-dom';

type EditEmployeeProps = {
    employee: IEmployee;
}

const EditEmployee = (props: EditEmployeeProps) => {
    // API CALL
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = getEmployeeById(id!);
    const navigate = useNavigate();

    const [input, setInput] = useState<IEmployee>(
        {
            id_karyawan: "",
            nama_karyawan: "",
            gaji_karyawan: "",
            bonus_gaji_karyawan: "",
        }
    )

    useEffect(() => {
        if (data) {
            const inputField: IEmployee = {
                id_karyawan: data.id_karyawan ?? "",
                nama_karyawan: data.nama_karyawan ?? "",
                gaji_karyawan: data.gaji_karyawan ?? "",
                bonus_gaji_karyawan: data.bonus_gaji_karyawan ?? "",
            };
            setInput(inputField);
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await editEmployee(input, data.id_karyawan);
        navigate('/mo-employee');
    };

    const handleCancelClick = () => {
        navigate('/mo-employee');
    };

    return (
        <MOWrapper>
            <EmployeeBreadcrumb pageName="Edit Employee" />
            {isLoading &&
                <div className="w-full mt-64 flex justify-center items-center">
                    <span className="loading loading-dots loading-md"></span>
                </div>
            }
            {error && <div>Error</div>}
            {data && (
                <div className="bg-white shadow-default p-6">
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Employee Name</label>
                            <input
                                type="text"
                                placeholder="Enter Employee Name"
                                className="input w-full max-w-md"
                                name="nama_karyawan"
                                onChange={handleChange}
                                value={input.nama_karyawan}
                                required />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Salary</label>
                            <input
                                type="number"
                                placeholder="Enter Salary"
                                className="input w-full max-w-md"
                                name="gaji_karyawan"
                                onChange={handleChange}
                                value={input.gaji_karyawan}
                                disabled />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Bonus Salary</label>
                            <input
                                type="number"
                                placeholder="Enter Bonus Salary"
                                className="input w-full max-w-md"
                                name="bonus_gaji_karyawan"
                                onChange={handleChange}
                                value={input.bonus_gaji_karyawan}
                                disabled />
                        </div>

                        <div className="flex justify-end gap-3 mt-10">
                            <button className="btn btn-active" onClick={handleCancelClick}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            )}
        </MOWrapper>
    );
};

export default EditEmployee;
