import React from 'react';
// import { Link } from 'react-router-dom';
import { AdminWrapper } from '../../../components/Wrapper';
import { CardProduct, CardRecipe } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import { getOwnProducts } from '../../../lib/repository/RecipeRepository';

const Recipe: React.FC = () => {
    //API CALL
    const { data, error, isLoading, isValidating } = getOwnProducts();
    console.log(`Data in Recipe: ${data}`);

    return (
        <>
            <AdminWrapper>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-xl font-serif font-bold text-black">
                        Atma Kitchen Recipes
                    </h2>
                </div>

                {isLoading &&
                    <div className="w-full mt-64 flex justify-center items-center">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                }
                {error && <div>Error</div>}
                {data && (
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="flex flex-wrap items-center">
                            {data.map((product) => (
                                <div key={product.id_produk} className="w-full sm:w-1/2 md:w-1/4 p-4">
                                    <CardProduct product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-8 mb-4">
                            <Link to="/add-recipe">
                                <button className="btn btn-primary">Add New Recipes</button>
                            </Link>
                        </div>
                    </div>
                )}
            </AdminWrapper>
        </>
    );
};

export default Recipe;
