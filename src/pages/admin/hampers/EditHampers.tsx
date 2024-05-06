// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HampersBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';

const EditHampers: React.FC = () => {
    return (
        <AdminWrapper>
            <HampersBreadcrumb pageName="Edit Hampers" />
            <div className="bg-white shadow-default p-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
                <form className="flex flex-col gap-6">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud-upload"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </form>

                <form className="flex flex-col gap-6">
                    <label className="font-medium text-gray-800">Hampers Name</label>
                    <input type="text" placeholder="Enter Hampers Name" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Items</label>
                    <select className="select w-full max-w-md">
                        <option value="">Select Items</option>
                        <option value="Cake">Lapis Legit</option>
                        <option value="Bread">Roti Sosis</option>
                        <option value="Drinks">Matcha Creamy Latte</option>
                    </select>
                    <select className="select w-full max-w-md">
                        <option value="">Select Items</option>
                        <option value="Cake">Lapis Legit</option>
                        <option value="Bread">Roti Sosis</option>
                        <option value="Drinks">Matcha Creamy Latte</option>
                    </select>


                    <label className="font-medium text-gray-800">Price</label>
                    <input type="number" placeholder="Enter Price" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Stocks</label>
                    <input type="number" placeholder="Enter Stocks" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Minimal Stocks</label>
                    <input type="number" placeholder="Enter Minimal Stocks" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Description</label>
                    <textarea placeholder="Enter Description" className="textarea w-full max-w-md"></textarea>

                    <div className="flex justify-end gap-3 mx-12">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Add Hampers</button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default EditHampers;
