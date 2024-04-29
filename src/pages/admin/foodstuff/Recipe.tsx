import React from 'react';
// import { Link } from 'react-router-dom';
import { AdminWrapper } from '../../../components/Wrapper';
import { CardRecipe } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';

const Recipe: React.FC = () => {
    const recipe = [
        {
            id: 1,
            title: 'Lapis Legit',
            description: 'Butter, creamer, telur, gula pasir, susu bubuk, tepung terigu',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Lapis Legit',
            description: 'Butter, creamer, telur, gula pasir, susu bubuk, tepung terigu',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Lapis Legit',
            description: 'Butter, creamer, telur, gula pasir, susu bubuk, tepung terigu',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Lapis Legit',
            description: 'Butter, creamer, telur, gula pasir, susu bubuk, tepung terigu',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <AdminWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Recipes
                </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="flex flex-wrap items-center">
                    {recipe.map((recipe) => (
                        <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <CardRecipe recipe={recipe} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8 mb-4">
                    <Link to="/add-recipe">
                        <button className="btn btn-primary">Add New Recipes</button>
                    </Link>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default Recipe;
