import React from 'react';
import { AdminWrapper } from '../../../components/Wrapper';
import { CardHampers } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../lib/interfaces/IProducts';

const Hampers: React.FC = () => {
    const product: IProduct[] = [
        {
            id_produk: '1',
            nama_produk: 'Hampers A',
            harga: '650000',
            limit_produksi: '50',
            jenis_produk: 'Produk Hampers',
            image: 'https://via.placeholder.com/150',
        },
        {
            id_produk: '2',
            nama_produk: 'Hampers B',
            harga: '500000',
            limit_produksi: '50',
            jenis_produk: 'Produk Hampers',
            image: 'https://via.placeholder.com/150',
        },
        {
            id_produk: '3',
            nama_produk: 'Hampers C',
            harga: '350000',
            limit_produksi: '50',
            jenis_produk: 'Produk Hampers',
            image: 'https://via.placeholder.com/150',
        },
        {
            id_produk: '4',
            nama_produk: 'Hampers D',
            harga: '300000',
            limit_produksi: '50',
            jenis_produk: 'Produk Hampers',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <AdminWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Hampers
                </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="flex flex-wrap items-center">
                    {product.map((product) => (
                        <div key={product.id_produk} className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <CardHampers product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4 mb-4">
                <Link to="/add-hampers">
                    <button className="btn btn-primary">Add New Hampers</button>
                </Link>
            </div>
        </AdminWrapper>
    );
};

export default Hampers;
