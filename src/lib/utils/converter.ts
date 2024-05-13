import moment from "moment";

export const dateConverter = (date: string) => {
  return moment(date).format("ddd, DD MMMM YYYY");
};

export const currencyConverter = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};
