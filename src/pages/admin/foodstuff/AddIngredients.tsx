import React, { useState } from "react";
import { IngredientsBreadcrumb } from "../../../components/Breadcrumbs/Breadcrumb";
import { AdminWrapper } from "../../../components/Wrapper";
import { addIngredients } from "../../../lib/repository/IngredientsRepository";
import { useNavigate } from 'react-router-dom';

const AddIngredients: React.FC = () => {
    const inputField = {
        nama_bahan_baku: "",
        satuan: "",
        stok: "",
        min_stok: "",
    };

    const [input, setInput] = useState(inputField);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addIngredients(input);
        navigate('/admin-ingredients');
    };

    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/admin-ingredients');
    };

    return (
        <AdminWrapper>
            <IngredientsBreadcrumb pageName="Add New Ingredients" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">
                            Ingredients Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Ingredients Name"
                            className="input w-full max-w-md"
                            name="nama_bahan_baku"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">
                            Units
                        </label>
                        <select
                            className="select w-full max-w-md"
                            name="satuan"
                            value={input.satuan}
                            onChange={handleSelectChange}
                            required
                        >
                            <option value="">Select Units</option>
                            <option value="kg">Kg</option>
                            <option value="ml">Ml</option>
                            <option value="gr">Gram</option>
                            <option value="buah">Buah</option>
                            <option value="butir">Butir</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">
                            Stocks
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Stocks"
                            className="input w-full max-w-md"
                            name="stok"
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">
                            Minimum Stock
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Minimum Stock"
                            className="input w-full max-w-md"
                            name="min_stok"
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active" onClick={handleCancelClick}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Add Ingredients
                        </button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default AddIngredients;
