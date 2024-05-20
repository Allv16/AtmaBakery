import { NavWrapper } from "../../../components/Wrapper";
import { CardHistory } from "../../../components/Card/Card";
import { getAllTransactionByIdCustomer } from "../../../lib/repository/TransactionRepository";
import { ICustomer } from "../../../lib/interfaces/ICustomer";
import { useState } from "react";
import { ITransaction } from "../../../lib/interfaces/ITransaction";
import { ITransactionDetails } from "../../../lib/interfaces/ITransactionDetails";
import { Search } from "lucide-react";

export default function OrderHistory() {
  const customer = JSON.parse(localStorage.getItem("customer_id") || "{}")
    .customer as ICustomer;
  const { data, error, isLoading } = getAllTransactionByIdCustomer(
    customer.id_customer
  );

  const [search, setSearch] = useState("");

  const dataFiltered = data?.filter((item: ITransaction) => {
    return item.detail_transaksi.some((detail: ITransactionDetails) =>
      detail.produk.nama_produk.toLowerCase().includes(search.toLowerCase())
    );
  });

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
                Order History
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex items-center">
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search size={16} />
                  </label>
                </div>
                {isLoading ? (
                  <div className="w-full flex justify-center items-center mt-16">
                    <span className="loading loading-dots loading-sm" />
                  </div>
                ) : dataFiltered.length > 0 ? (
                  dataFiltered.map((item) => (
                    <CardHistory transaction={item} key={item.id_transaksi} />
                  ))
                ) : (
                  <div className="w-full flex justify-center items-center mt-16">
                    <span className="text-lg font-medium">
                      No transaction found.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavWrapper>
  );
}
