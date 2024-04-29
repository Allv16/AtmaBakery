import React from 'react';
import { MOWrapper } from '../../../components/Wrapper';
import { PartnerTable } from '../../../components/Table/Table';

const Partner: React.FC = () => {
    return (
        <MOWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Partner
                </h2>
            </div>
            <div className="flex justify-end">
                <a href="/add-partner" className="btn btn-primary mb-4">Add New Partner</a>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                <PartnerTable />
            </div>
        </MOWrapper>
    );
};

export default Partner;
