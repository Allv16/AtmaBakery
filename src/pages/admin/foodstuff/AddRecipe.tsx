import React, { useState, useEffect } from 'react';
import { RecipeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';
import { addRecipes } from "../../../lib/repository/RecipeRepository";
import axios from 'axios';

const AddRecipe: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState({
        nama_produk: "",
        nama_bahan_baku: "",
        jumlah_bahan: "",
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_API}/products/own-products`);
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchIngredients = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_API}/ingredients`);
                setIngredients(response.data);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchProducts();
        fetchIngredients();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addRecipes(input);
    };

    return (
        <AdminWrapper>
            <RecipeBreadcrumb pageName="Add New Recipe" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Product</label>
                        <select
                            className="select w-full max-w-md"
                            name="nama_produk"
                            value={input.nama_produk}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select Product</option>
                            {products.map((data: any) => (
                                <option key={data.id_produk} value={data.nama_produk}>{data.nama_produk}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Ingredients</label>
                        <select
                            className="select w-full max-w-md"
                            name="nama_bahan_baku"
                            value={input.nama_bahan_baku}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select Ingredients</option>
                            <option value="Butter">Butter</option>
                            <option value="Creamer">Creamer</option>
                            <option value="Telur">Telur</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Quantity</label>
                        <input
                            type="number"
                            placeholder="Enter Quantity"
                            className="input w-full max-w-md"
                            name="jumlah_bahan"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary" type="submit">
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default AddRecipe;
