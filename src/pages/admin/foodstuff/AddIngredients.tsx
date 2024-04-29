import React from 'react';
import { IngredientsBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';

const AddIngredients: React.FC = () => {
    return (
        <AdminWrapper>
            <IngredientsBreadcrumb pageName="Add New Ingredients" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Ingredients Name</label>
                        <input type="text" placeholder="Enter Ingredients Name" className="input w-full max-w-md" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Items</label>
                        <select className="select w-full max-w-md">
                            <option value="">Select Units</option>
                            <option value="Cake">Kg</option>
                            <option value="Bread">Ml</option>
                            <option value="Drinks">Gram</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Stocks</label>
                        <input type="number" placeholder="Enter Stocks" className="input w-full max-w-md" />
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

export default AddIngredients;
