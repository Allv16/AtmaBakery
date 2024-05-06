import React from 'react';
import { AdminWrapper } from '../../../components/Wrapper';
import { CardHampers } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import { IHampers } from '../../../lib/interfaces/IHampers';
import { getAllHampers } from "../../../lib/repository/HampersRepository";

const Hampers: React.FC = () => {
    //API CALL
    const { data, error, isLoading, isValidating } = getAllHampers();

    return (
        <>
            <AdminWrapper>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-xl font-serif font-bold text-black">
                        Atma Kitchen Hampers
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
                            {data.map((hampers) => (
                                <div key={hampers.hampers.id_produk} className="w-full sm:w-1/2 md:w-1/4 p-4">
                                    <CardHampers hampers={hampers} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex justify-center mt-4 mb-4">
                    <Link to="/add-hampers">
                        <button className="btn btn-primary">Add New Hampers</button>
                    </Link>
                </div>
            </AdminWrapper>
        </>
    );
};

export default Hampers;
