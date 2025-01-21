const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const PaymentApi = {
  changeStatus: `${Production}changeStatus`, 
  createPayment:`${Production}create-payment`
};
