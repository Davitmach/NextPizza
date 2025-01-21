
import { PaymentApi } from "@/api/payment/paymentApi";
import axios from "axios";
class PaymentService {
   private api;
   constructor() {

    this.api = PaymentApi;
  }
   async createPayment (name:string,lastname:string,phone:string,address:string,comment:string,amount:string,email:string,items:any[]) {
    try {
      const response = await axios.post(this.api.createPayment, {
        firstName:name,
            lastName:lastname,
            phone:phone,
            address:address,
            comment:comment,
            amount:amount,
            email:email,
            items:items
    
      },{
        withCredentials:true
      });
  
      const data = await response.data;
    if(data.confirmationUrl) {
window.location.href = data.confirmationUrl
    }
    
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
 async changeStatus(status:string,id:string) {
  try {
 const data = await axios.post(this.api.changeStatus,{
    status:status,
    id:id
 })
 return data.data;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
async getOrders() {
  try {
 const data = await axios.get(this.api.getOrder,{
  withCredentials:true
 })
 return data.data;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}


}
export const paymentService = new PaymentService();