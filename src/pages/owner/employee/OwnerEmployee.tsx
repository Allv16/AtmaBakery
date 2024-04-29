import React from 'react';
import { OwnerWrapper } from '../../../components/Wrapper';
import { OwnerEmployeeTable } from '../../../components/Table/Table';

const OwnerEmployee: React.FC = () => {
    return (
        <OwnerWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Employee
                </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                <OwnerEmployeeTable />
            </div>
        </OwnerWrapper>
    );
};

export default OwnerEmployee;
