import { ICustomer } from "./ICustomer";

export type IPayment = {
  id_pembayaran: string;
  jenis_pembayaran: string;
  bukti_transfer: string;
  tanggal_pembayaran: string;
  total_pembayaran: number;
  tip: number;
  customer: ICustomer;
};
