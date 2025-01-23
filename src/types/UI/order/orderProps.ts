import { CartItemsType } from "@/types/payload/cartItemsData"
import { ProductPayload } from "@/types/payload/productPayload"
export type OrderStatus= 'PENDING'|
    'SUCCEEDED'|
    'CANCELLED'



export type OrderProps = {
        id: number,
        userId: number,
        token: string,
        totalAmount: number,
        status: OrderStatus,
        paymentId: string,
        items: CartItemsType[],
        fullName: string,
        email: string,
        phone: string,
        address: string,
        comment?: string,
        createdAt: string  
}
export type OrderPageProps = {
    totalAmount: number,
    items:CartItemsType[],
    active:boolean


}