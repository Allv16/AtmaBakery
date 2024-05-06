import React, { useState } from 'react';
import { PartnerBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';
import { addPartner } from '../../../lib/repository/PartnerRepository';
import { useNavigate } from 'react-router-dom';

const AddPartner: React.FC = () => {
    const inputField = {
        nama_penitip: "",
        alamat_penitip: "",
        telp_penitip: "",
    };

    const navigate = useNavigate();

    const [input, setInput] = useState(inputField);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addPartner(input);
        navigate('/mo-partner');
    };

    const handleCancelClick = () => {
        navigate('/mo-partner');
    };

    return (
        <MOWrapper>
            <PartnerBreadcrumb pageName="Add New Partner" />
            <div className="bg-white shadow-default p-6">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Partner Name</label>
                        <input type="text" placeholder="Enter Partner Name" className="input w-full max-w-md" name="nama_penitip"
                            onChange={handleChange} required />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Partner Address</label>
                        <input type="text" placeholder="Enter Partner Address" className="input w-full max-w-md" name="alamat_penitip"
                            onChange={handleChange} required />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <label className="font-medium text-gray-800 w-full max-w-xs">Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number" className="input w-full max-w-md" name="telp_penitip"
                            onChange={handleChange} min="0" required />
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button className="btn btn-active" onClick={handleCancelClick}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" type="submit">Add Partner</button>
                    </div>
                </form>
            </div>
        </MOWrapper>
    );
};

export default AddPartner;
