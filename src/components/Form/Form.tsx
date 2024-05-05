import React, { useState } from 'react';
import { IIngredients } from '../../lib/interfaces/IIngredients';

type IngredientsListProps = {
    ingredientsData: IIngredients[];
};

export const RecipeForm: React.FC<IngredientsListProps> = ({ ingredientsData }) => {
    const [selectedIngredient, setSelectedIngredient] = useState<IIngredients | null>(null);

    const handleAddToRecipe = (ingredient: IIngredients) => {
        setSelectedIngredient(ingredient);
    };

    return (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="flex flex-col gap-12">
                <div className="rounded-sm border border-stroke bg-white shadow-default">
                    <div className="border-b border-stroke py-4 px-7">
                        <h3 className="font-medium text-black">Recipe</h3>
                    </div>
                    <form>
                        {selectedIngredient && (
                            <div className="p-7">
                                <div className="mb-5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-3 block text-black">Ingredients Name</label>
                                        <input
                                            type="number"
                                            placeholder="Enter quantity"
                                            className="w-full rounded border-[2px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                                            min="0"

                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2 flex items-end">
                                        <select
                                            name="units"
                                            className="w-full rounded border-[2px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                                        >
                                            <option value="">Select Units</option>
                                            <option value="kg">Kg</option>
                                            <option value="ml">Ml</option>
                                            <option value="gr">Gram</option>
                                            <option value="buah">Buah</option>
                                            <option value="butir">Butir</option>
                                        </select>
                                        <button
                                            type="button"
                                            className="btn btn-square ml-2"
                                            onClick={() => console.log('Delete clicked')}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default">
                    <div className="border-b border-stroke py-4 px-7">
                        <h3 className="font-medium text-black">
                            Ingredients List
                        </h3>
                    </div>
                    <form action="#">
                        <div className="p-7 py-4">
                            <ul className="divide-y divide-gray-200">
                                {ingredientsData.map((ingredient) => (
                                    <li key={ingredient.id_bahan_baku} className="py-2">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-base font-medium">{ingredient.nama_bahan_baku}</h4>
                                            </div>
                                            <button className="btn btn-primary btn-sm" onClick={() => handleAddToRecipe(ingredient)}>Add To Recipe</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};