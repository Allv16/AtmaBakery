import { NavWrapper } from "../../../components/Wrapper";
import { CardHistory } from "../../../components/Card/Card";
import { getProfileCustomer } from "../../../lib/repository/ProfileRepository";
import { IProfileCustomer } from "../../../lib/interfaces/IProfileCustomer";
import { useEffect, useState } from "react";
import { getHistoryTransaction } from "../../../lib/repository/TransaksiRepository";
import { IHistory } from "../../../lib/interfaces/IHistory";
import React from "react";

export default function UnpaidOrderList() {
    const { data, error, isLoading } = getProfileCustomer();

    const [input, setInput] = useState<IProfileCustomer>({
        id_user: "",
        id_customer: "",
        nama_customer: "",
        no_telp: 0,
        tanggal_lahir: "",
        jenis_kelamin: "",
        poin: 0,
    });

    const [inputHistory, setInputHistory] = useState<IHistory[]>([]);

    const { dataHistory, errorHistory, isLoadingHistory } = getHistoryTransaction(
        input.id_customer
    );

    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        if (data) {
            const inputField: IProfileCustomer = {
                id_user: data.id_user ?? "",
                id_customer: data.id_customer ?? "",
                nama_customer: data.nama_customer ?? "",
                no_telp: data.no_telp ?? 0,
                tanggal_lahir: data.tanggal_lahir ?? "",
                jenis_kelamin: data.jenis_kelamin ?? "",
                poin: data.poin ?? 0,
            };
            setInput(inputField);
        }
        if (dataHistory) {
            dataHistory.map((item) => {
                let inputField: IHistory = {
                    id_transaksi: item.id_transaksi ?? "",
                    tanggal_diterima: item.tanggal_diterima ?? "",
                    tanggal_ditolak: item.tanggal_ditolak ?? "",
                    total: item.total ?? 0,
                    status_transaksi: item.status_transaksi ?? "",
                    detail_transaksi: item.detail_transaksi ?? [],
                };
                setInputHistory((prev) => [...prev, inputField]);
            });
        }
    }, [data, dataHistory]);

    const [search, setSearch] = React.useState("");

    const [dataSearch, setDataSearch] = useState<IHistory[]>([]);

    // function filterData(name: string) {
    //     let dataFiltered = dataHistory?.filter((item: IHistory) => {
    //         return item.detail_transaksi?.some((item) => {
    //             return item.produk.nama_produk
    //                 .toLowerCase()
    //                 .includes(name.toLowerCase());
    //         });
    //     });

    //     return dataFiltered;
    // }

    // function handleSearch(e: any) {
    //     e.preventDefault();
    //     if (search === "") {
    //         setIsSearch(false);
    //     } else {
    //         setIsSearch(true);
    //         setDataSearch(filterData(search));
    //     }
    // }

    return (
        <NavWrapper>
            <div className="bg-white mx-auto py-20 flex flex-col-2 gap-10 px-3 md:flex-row">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="flex flex-col p-4 text-sm border-r border-indigo-100 top-12 border">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h2 className="pl-3 text-xl font-semibold">
                                    {input.nama_customer}
                                </h2>
                                <h6 className="pl-3 text-sm font-semibold">
                                    {input.poin}
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
                            href="#"
                            className="flex items-center px-3 py-2.5 font-semibold text-lg"
                        >
                            Order
                        </a>
                        <a
                            href="/order-history"
                            className="flex items-center px-3 py-2.5 font-semibold text-lg"
                        >
                            History
                        </a>
                    </div>
                </aside>
                <main className="w-full min-h-screen py-4 md:w-2/3 lg:w-3/4">
                    <div className="p-2 md:p-4 border">
                        <div className="w-full mx px-3 pb-8 sm:rounded-lg">
                            <h2 className="pl-2 flex items-center text-2xl font-serif font-semibold">
                                Unpaid
                            </h2>
                            <div className="grid max-w-2xl mx-auto mt-8">
                                <div className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5"
                                            placeholder="Search..."
                                            required
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                                {isSearch
                                    ? dataSearch.map((history) => (
                                        <CardHistory history={history} />
                                    ))
                                    : inputHistory.map((history) => (
                                        <CardHistory history={history} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </NavWrapper>
    );
}
