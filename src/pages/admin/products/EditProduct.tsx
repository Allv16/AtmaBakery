import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { ProductBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';

const EditProduct: React.FC = () => {
    const [category, setCategory] = useState('');
    const [showPriceForm, setShowPriceForm] = useState(false);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);

        if (selectedCategory === 'Cake') {
            setShowPriceForm(true);
        } else if (selectedCategory === 'Bread' || selectedCategory === 'Drinks') {
            setShowPriceForm(true);
        } else {
            setShowPriceForm(false);
        }
    };

    return (
        <AdminWrapper>
            <ProductBreadcrumb pageName="Edit Product" />
            <div className="bg-white shadow-default p-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
                <form className="flex flex-col gap-6">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud-upload"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </form>

                <form className="flex flex-col gap-6">
                    <label className="font-medium text-gray-800">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Category</label>
                    <select className="select w-full max-w-md" onChange={handleCategoryChange} value={category}>
                        <option disabled value="">Select Category</option>
                        <option value="Cake">Cake</option>
                        <option value="Bread">Bread</option>
                        <option value="Drinks">Drinks</option>
                    </select>

                    {showPriceForm && category === 'Cake' && (
                        <>
                            <label className="font-medium text-gray-800">Half Pan Price</label>
                            <input type="number" placeholder="Enter Half Pan Price" className="input w-full max-w-md" />

                            <label className="font-medium text-gray-800">One Pan Price</label>
                            <input type="number" placeholder="Enter One Pan Price" className="input w-full max-w-md" />
                        </>
                    )}
                    {showPriceForm && (category === 'Bread' || category === 'Drinks') && (
                        <>
                            <label className="font-medium text-gray-800">Price</label>
                            <input type="number" placeholder="Enter Price" className="input w-full max-w-md" />
                        </>
                    )}

                    <label className="font-medium text-gray-800">Stocks</label>
                    <input type="number" placeholder="Enter Stocks" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Minimal Stocks</label>
                    <input type="number" placeholder="Enter Minimal Stocks" className="input w-full max-w-md" />

                    <label className="font-medium text-gray-800">Description</label>
                    <textarea placeholder="Enter Description" className="textarea w-full max-w-md"></textarea>

                    <div className="flex justify-end gap-3 mx-12">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default EditProduct;
