import moment from "moment";

export const dateConverter = (date: string) => {
  return moment(date).format("ddd, DD MMMM YYYY");
};

export const dateConverterISO = (date: string) => {
  return moment(date).format("YYYY-MM-DD");
};

export const dateConverterSimple = (date: string) => {
  return moment(date).format("DD MMMM YYYY");
};

export const currencyConverter = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};
