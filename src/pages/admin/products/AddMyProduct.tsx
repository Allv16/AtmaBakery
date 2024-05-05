import React, { useState } from 'react';
import { ProductBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';

const AddMyProduct: React.FC = () => {
    const inputField = {
        nama_produk: "",
        harga: "",
        limit_produksi: "",
        jenis_produksi: "",
        foto: "",
        deskripsi: "",
        id_penitip: null,
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
        // await addProducts(input);
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const uploadedFile = files[0];
            setSelectedFile(uploadedFile);
        }
    };

    return (
        <AdminWrapper>
            <ProductBreadcrumb pageName="Add New Product" />
            <div className="bg-white shadow-default p-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">{selectedFile ? selectedFile.name : 'Click to upload'}</span></p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} />
                        </label>
                    </div>
                </form>

                <form className="flex flex-col gap-6">
                    <label className="font-medium text-gray-800">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="input w-full max-w-md" name="nama_produk"
                        onChange={handleChange}
                        required />

                    <label className="font-medium text-gray-800">Category</label>
                    <select className="select w-full max-w-md" name="jenis_produksi"
                        value={input.jenis_produksi}
                        onChange={handleSelectChange}
                        required>
                        <option value="">Select Category</option>
                        <option value="Cake">Cake</option>
                        <option value="Bread">Bread</option>
                        <option value="Drinks">Drinks</option>
                    </select>

                    <label className="font-medium text-gray-800">Price</label>
                    <input type="number" placeholder="Enter Price" className="input w-full max-w-md" name="harga"
                        onChange={handleChange}
                        min="0" required />

                    <label className="font-medium text-gray-800">Production Limit</label>
                    <input type="number" placeholder="Enter Production Limit" className="input w-full max-w-md" name="limit_produksi"
                        onChange={handleChange}
                        min="0" required />

                    <label className="font-medium text-gray-800">Description</label>
                    <textarea placeholder="Enter Description" className="textarea w-full max-w-md" name="deskripsi"
                        required></textarea>

                    <div className="flex justify-end gap-3 mx-12">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary" type="submit">Add Product</button>
                    </div>
                </form>
            </div>
        </AdminWrapper>
    );
};

export default AddMyProduct;
