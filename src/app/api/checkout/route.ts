import { paymentService } from "@/service/paymentService";

interface Yookassa {
    
        type:string,
        event:string,
        object: {
          id: string,
          status: string,
          amount: { value: string, currency: string },
          income_amount: { value:string, currency:string },
          description: string,
          recipient: { account_id:string, gateway_id:string },
          payment_method: {
            type: string,
            id: string,
            saved: boolean,
            status: string,
            title:string,
            account_number: string
          },
          captured_at: string,
          created_at:string,
          test: boolean,
          refunded_amount: { value:string, currency:string },
          paid: boolean,
          refundable: boolean,
          metadata: {
            last_name: string,
            comment: string,
            address:string,
            first_name: string,
            phone: string
          }
        }
      
}
export async function POST(request: Request) {
    try {
      const data:Yookassa = await request.json();
   if(data) {
const PaymentId = data.object.id;
if(data.object.status) {
    paymentService.changeStatus(data.object.status,PaymentId);
}
   }
   
  
   
    } catch (error) {
      
      return new Response(JSON.stringify({ error: 'Invalid request data' }), {
        status: 400,
      });
    }
  }
  