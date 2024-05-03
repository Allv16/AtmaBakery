import React from 'react';
import { OwnerWrapper } from '../../../components/Wrapper';
import { EmployeeTable } from '../../../components/Table/Table';
import { getAllEmployee } from '../../../lib/repository/EmployeeRepository';

const OwnerEmployee: React.FC = () => {
    //API CALL
    const { data, error, isLoading, isValidating } = getAllEmployee();

    return (
        <OwnerWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Employee
                </h2>
            </div>
            {isLoading &&
                <div className="w-full mt-64 flex justify-center items-center">
                    <span className="loading loading-dots loading-md"></span>
                </div>
            }
            {error && <div>Error</div>}
            {data && (
                <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                    <EmployeeTable employeeData={data} />
                </div>
            )}
        </OwnerWrapper>
    );
};

export default OwnerEmployee;
