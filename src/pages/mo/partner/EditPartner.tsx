// import React, { useState } from 'react';
import { PartnerBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';

const EditPartner: React.FC = () => {
    return (
        <MOWrapper>
            <PartnerBreadcrumb pageName="Edit Partner" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Partner Name</label>
                        <input type="text" placeholder="Enter Partner Name" className="input w-full max-w-md" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Product</label>
                        <select className="select w-full max-w-md">
                            <option value="">Select Product</option>
                            <option value="Keripik">Keripik Kentang</option>
                            <option value="Kopi">Kopi Luwak Bubuk</option>
                            <option value="ChocoBar">Chocolate Bar</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Stocks</label>
                        <input type="number" placeholder="Enter Stocks" className="input w-full max-w-md" />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Add Partner</button>
                    </div>
                </form>
            </div>
        </MOWrapper>
    );
};

export default EditPartner;
