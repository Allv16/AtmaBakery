// import React from "react";
// import { getAllProcuts } from "../../../lib/repository/ProductRepository";
// import { IProduct } from "../../../lib/interfaces/IProducts";

// export default function Products() {
//   const { data, error, isLoading, isValidating } = getAllProcuts();
//   console.log(data);

//   return (
//     <div>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error</div>
//       ) : (
//         data?.data.map((item: any) => (
//           <div>
//             <h1>{item.nama_penitip}</h1>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
