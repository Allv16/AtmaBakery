import { NavWrapper } from "../../../components/Wrapper";
import { getTransactionById } from "../../../lib/repository/TransactionRepository";
import { ICustomer } from "../../../lib/interfaces/ICustomer";
import { useState } from "react";
import { ITransaction } from "../../../lib/interfaces/ITransaction";
import { ITransactionDetails } from "../../../lib/interfaces/ITransactionDetails";
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDetailsCard } from "../../../components/Card/Card";

export default function DetailsOrder() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const customer = JSON.parse(localStorage.getItem("customer_id") || "{}")
        .customer as ICustomer;
    const { data, error, isLoading } = getTransactionById(id!);

    const handleBack = () => {
        navigate('/order-history');
    };

    return (
        <NavWrapper>
            <div className="bg-white mx-auto flex flex-col-2 gap-10 px-3 py-20 md:flex-row">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="flex flex-col p-4 text-sm border-r border-indigo-100 top-12 border">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h2 className="pl-3 text-xl font-semibold">
                                    {customer.nama_customer}
                                </h2>
                                <h6 className="pl-3 text-sm font-semibold">
                                    {customer.poin}
                                    {" point"}
                                </h6>
                            </div>
                        </div>
                        <a
                            href="/profile"
                            className="flex items-center px-3 py-2.5 font-bold bg-white text-lg"
                        >
                            Settings
                        </a>
                        <a
                            href="/order-history"
                            className="flex items-center px-3 py-2.5 font-semibold text-lg"
                        >
                            Transactions
                        </a>
                    </div>
                </aside>
                <main className="w-full min-h-screen py-4 md:w-2/3 lg:w-3/4">
                    <div className="p-2 md:p-4 border">
                        <div className="w-full mx px-3 pb-8 sm:rounded-lg">
                            <div className="flex items-center">
                                <button onClick={handleBack} className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29565B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                                </button>
                                <h2 className="pl-2 flex items-center text-2xl font-serif font-semibold text-primary">
                                    Order Details
                                </h2>
                            </div>
                            {isLoading && (
                                <div className="w-full mt-64 flex justify-center items-center">
                                    <span className="loading loading-dots loading-md"></span>
                                </div>
                            )}
                            {error && <div>Error</div>}
                            {data && (
                                <OrderDetailsCard transaction={data} key={data.id_transaksi} />
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </NavWrapper>
    );
}
