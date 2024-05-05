import React, { useState, useEffect } from 'react';
import { PartnerBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { MOWrapper } from '../../../components/Wrapper';
import { IPartner } from '../../../lib/interfaces/IPartner';
import { useParams } from 'react-router-dom';
import { editPartner, getPartnerById } from '../../../lib/repository/PartnerRepository';

type EditPartnerProps = {
    partner: IPartner;
}

const EditPartner = (props: EditPartnerProps) => {
    // API CALL
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = getPartnerById(id!);

    const [input, setInput] = useState<IPartner>(
        {
            id_penitip: "",
            nama_penitip: "",
            alamat_penitip: "",
            telp_penitip: "",
        }
    )

    useEffect(() => {
        if (data) {
            const inputField: IPartner = {
                id_penitip: data.id_penitip ?? "",
                nama_penitip: data.nama_penitip ?? "",
                alamat_penitip: data.alamat_penitip ?? "",
                telp_penitip: data.telp_penitip ?? "",
            };
            setInput(inputField);
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await editPartner(input, data.id_penitip);
    };

    return (
        <MOWrapper>
            <PartnerBreadcrumb pageName="Edit Partner" />
            {isLoading &&
                <div className="w-full mt-64 flex justify-center items-center">
                    <span className="loading loading-dots loading-md"></span>
                </div>
            }
            {error && <div>Error</div>}
            {data && (
                <div className="bg-white shadow-default p-6">
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Partner Name</label>
                            <input
                                type="text"
                                placeholder="Enter Partner Name"
                                className="input w-full max-w-md"
                                name="nama_penitip"
                                onChange={handleChange}
                                value={input.nama_penitip}
                                required />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Partner Address</label>
                            <input
                                type="text"
                                placeholder="Enter Partner Address"
                                className="input w-full max-w-md"
                                name="alamat_penitip"
                                onChange={handleChange}
                                value={input.alamat_penitip}
                                required />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <label className="font-medium text-gray-800 w-full max-w-xs">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Enter Phone Number"
                                className="input w-full max-w-md"
                                name="telp_penitip"
                                onChange={handleChange}
                                min="0"
                                value={input.telp_penitip}
                                required />
                        </div>

                        <div className="flex justify-end gap-3 mt-10">
                            <button className="btn btn-active">Cancel</button>
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            )}
        </MOWrapper>
    );
};

export default EditPartner;
