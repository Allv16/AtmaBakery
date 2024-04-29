import React from 'react';
import { EmployeeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';

const EditEmployee: React.FC = () => {
    return (
        <MOWrapper>
            <EmployeeBreadcrumb pageName="Edit Employee" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Employee Name</label>
                        <input type="text" placeholder="Enter Employee Name" className="input w-full max-w-md" />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Add Employee</button>
                    </div>
                </form>
            </div>
        </MOWrapper>
    );
};

export default EditEmployee;
