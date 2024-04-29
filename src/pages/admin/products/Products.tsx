import React, { useState } from "react";
import { AdminWrapper } from "../../../components/Wrapper";
import { CardProduct } from "../../../components/Card/Card";
import { IProduct } from "../../../lib/interfaces/IProducts";
import { Link } from "react-router-dom";
import { getAllProcuts } from "../../../lib/repository/ProductRepository";

const Products: React.FC = () => {
  //API CALL
  const { data, error, isLoading, isValidating } = getAllProcuts();

  const [selectedTab, setSelectedTab] = useState<string>("all");

  //   const product: IProduct[] = [
  //     {
  //       id_produk: "1",
  //       nama_produk: "Lapis Legit",
  //       harga: "850000",
  //       limit_produksi: "50",
  //       jenis_produk: "Cake",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "2",
  //       nama_produk: "Lapis Surabaya",
  //       harga: "500000",
  //       limit_produksi: "50",
  //       jenis_produk: "Cake",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "3",
  //       nama_produk: "Brownies",
  //       harga: "350000",
  //       limit_produksi: "50",
  //       jenis_produk: "Cake",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "4",
  //       nama_produk: "Spikoe",
  //       harga: "300000",
  //       limit_produksi: "50",
  //       jenis_produk: "Cake",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "5",
  //       nama_produk: "Matcha Creamy Latte",
  //       harga: "300000",
  //       limit_produksi: "50",
  //       jenis_produk: "Minuman",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "6",
  //       nama_produk: "Hampers A",
  //       harga: "300000",
  //       limit_produksi: "50",
  //       jenis_produk: "Hampers",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "7",
  //       nama_produk: "Roti Keju",
  //       harga: "300000",
  //       limit_produksi: "50",
  //       jenis_produk: "Roti",
  //       image: "https://via.placeholder.com/150",
  //     },
  //     {
  //       id_produk: "8",
  //       nama_produk: "Keripik Kentang",
  //       harga: "300000",
  //       limit_produksi: "50",
  //       jenis_produk: "Snack",
  //       image: "https://via.placeholder.com/150",
  //     },
  //   ];

  const filteredProducts = data?.filter((item) => {
    if (selectedTab === "my") {
      return ["Cake", "Roti", "Minuman", "Hampers"].includes(item.jenis_produk);
    } else if (selectedTab === "consignment") {
      return item.jenis_produk === "Snack";
    }
    return true;
  });

  const AddProductButton = () => {
    if (selectedTab === "my" || selectedTab === "consignment") {
      return (
        <div className="flex justify-center mt-8 mb-4">
          <Link to="/add-products">
            <button className="btn btn-primary">Add New Product</button>
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <AdminWrapper>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-xl font-serif font-bold text-black">
            Atma Kitchen Products
          </h2>
        </div>

        <div className="flex justify-end">
          <div role="tablist" className="tabs tabs-boxed">
            <button
              role="tab"
              className={`tab ${selectedTab === "all" ? "tab-active" : ""}`}
              onClick={() => setSelectedTab("all")}
            >
              All Products
            </button>
            <button
              role="tab"
              className={`tab ${selectedTab === "my" ? "tab-active" : ""}`}
              onClick={() => setSelectedTab("my")}
            >
              My Products
            </button>
            <button
              role="tab"
              className={`tab ${
                selectedTab === "consignment" ? "tab-active" : ""
              }`}
              onClick={() => setSelectedTab("consignment")}
            >
              Consignment
            </button>
          </div>
        </div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {data && (
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="flex flex-wrap items-center">
              {filteredProducts.map((product) => (
                <div
                  key={product.id_produk}
                  className="w-full sm:w-1/2 md:w-1/4 p-4"
                >
                  <CardProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
        {AddProductButton()}
      </AdminWrapper>
    </>
  );
};

export default Products;
