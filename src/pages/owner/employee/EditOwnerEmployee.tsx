import React from 'react';
import { OwnerEmployeeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { OwnerWrapper } from '../../../components/Wrapper';

const EditOwnerEmployee: React.FC = () => {
    return (
        <OwnerWrapper>
            <OwnerEmployeeBreadcrumb pageName="Edit Employee" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Salary</label>
                        <input type="number" placeholder="Enter Salary" className="input w-full max-w-md" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Bonus Salary</label>
                        <input type="number" placeholder="Enter Bonus Salary" className="input w-full max-w-md" />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
        </OwnerWrapper>
    );
};

export default EditOwnerEmployee;
