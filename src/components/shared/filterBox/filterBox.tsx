export const FilterBox = (props:{children?:React.ReactNode,title:string,className?:string})=> {
return(
    <div className={`w-full ${props.className}`}>
        <div><h2 className="font-[700] text-[16px] text-black-label">{props.title}</h2></div>
        <div> {props.children}</div>
       
    </div>
)
}