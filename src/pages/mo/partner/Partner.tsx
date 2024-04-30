import React from 'react';
import { MOWrapper } from '../../../components/Wrapper';
import { PartnerTable } from '../../../components/Table/Table';
import { getAllPartner } from '../../../lib/repository/PartnerRepository';

const Partner: React.FC = () => {
    //API CALL
    const { data, error, isLoading, isValidating } = getAllPartner();

    return (
        <>
            <MOWrapper>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-xl font-serif font-bold text-black">
                        Atma Kitchen Partner
                    </h2>
                </div>
                <div className="flex justify-end">
                    <a href="/add-partner" className="btn btn-primary mb-4">Add New Partner</a>
                </div>
                {isLoading &&
                    <div className="w-full mt-64 flex justify-center items-center">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                }
                {error && <div>Error</div>}
                {data && (
                    <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                        <PartnerTable partnerData={data} />
                    </div>
                )}
            </MOWrapper>
        </>
    );
};

export default Partner;
