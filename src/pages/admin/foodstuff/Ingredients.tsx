import React from 'react';
import { AdminWrapper } from '../../../components/Wrapper';
import { IngredientsTable } from '../../../components/Table/Table';

const Ingredients: React.FC = () => {
    return (
        <AdminWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Ingredients
                </h2>
            </div>
            <div className="flex justify-end">
                <a href="/add-ingredients" className="btn btn-primary mb-4">Add New Ingredients</a>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                <IngredientsTable />
            </div>
        </AdminWrapper>
    );
};

export default Ingredients;
