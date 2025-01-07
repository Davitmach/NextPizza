import { CategoryType } from "./categoryType"

export type CategoryProps = {
    children:React.ReactNode,

}
export type CategoryBoxProps = {
    children?:React.ReactNode,
    type:CategoryType
}