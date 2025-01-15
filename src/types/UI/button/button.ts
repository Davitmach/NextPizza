
import { ButtonSizes } from "./buttonSizes";
import { ButtonVariants } from "./buttonVariants";

export interface IButton {
    children?:React.ReactNode,
    variant: ButtonVariants,
    func?:Function,
    link?:string,
    status:boolean,
    size:ButtonSizes,
className?:string
}