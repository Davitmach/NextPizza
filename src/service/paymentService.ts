
import { PaymentApi } from "@/api/payment/paymentApi";
import axios from "axios";
class PaymentService {
   private api;
   constructor() {

    this.api = PaymentApi;
  }
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


}
export const paymentService = new PaymentService();