import React from 'react';
import { RecipeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';

const AddRecipe: React.FC = () => {
    return (
        <AdminWrapper>
            <RecipeBreadcrumb pageName="Add New Recipe" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Product</label>
                        <select className="select w-full max-w-md">
                            <option value="">Select Product</option>
                            <option value="LapisLegit">Lapis Legit</option>
                            <option value="LapisSurabaya">Lapis Surabaya</option>
                            <option value="RotiSosis">Roti Sosis</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Ingredients</label>
                        <select className="select w-full max-w-md">
                            <option value="">Select Ingredients</option>
                            <option value="Butter">Butter</option>
                            <option value="Creamer">Creamer</option>
                            <option value="Telur">Telur</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Quantity</label>
                        <input type="number" placeholder="Enter Quantity" className="input w-full max-w-md" />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Add Ingredients</button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default AddRecipe;
