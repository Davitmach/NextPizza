import { InputTypes } from "./inputTypes"

export type InputProps = {
    ErrorMessage:string,
    ErrorState:Boolean,
    InputType:InputTypes,
    Label?:string,
    ref:React.Ref<HTMLInputElement>,
    placeholder?:string,
    className?:string,
    required:boolean
}

export type PriceInput = {
    ref:React.Ref<HTMLInputElement>
}