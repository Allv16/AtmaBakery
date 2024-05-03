import React from 'react';
import { AdminWrapper } from '../../../components/Wrapper';
import { IngredientsTable } from '../../../components/Table/Table';
import { getAllIngredients } from "../../../lib/repository/IngredientsRepository";

const Ingredients: React.FC = () => {
    //API CALL
    const { data, error, isLoading } = getAllIngredients();

    return (
        <>
            <AdminWrapper>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-xl font-serif font-bold text-black">
                        Atma Kitchen Ingredients
                    </h2>
                </div>
                <div className="flex justify-end">
                    <a href="/add-ingredients" className="btn btn-primary mb-4">Add New Ingredients</a>
                </div>
                {isLoading &&
                    <div className="w-full mt-64 flex justify-center items-center">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                }
                {error && <div>Error</div>}
                {data && (
                    <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">
                        <IngredientsTable ingredientsData={data} />
                    </div>
                )}
            </AdminWrapper>
        </>
    );
};

export default Ingredients;
