import { LinkType } from "./linkType";

export interface ILink {
func?:Function,
link:string,
text:{
    en:string,
    am:string,
    ru:string
},
status?:LinkType
}