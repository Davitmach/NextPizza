interface CheckoutboxProps {
    children:React.ReactNode
}
export const CheckoutBox = (props:CheckoutboxProps)=> {


    return(
        <div className="bg-white rounded-[30px] max-w-[752px] w-full py-[30px] ">{props.children}</div>
    )
}