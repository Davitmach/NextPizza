import { IInfoType } from "./infoType";
import { OftenOrderType } from "./oftenOrderType";

export interface IOftenOrder {
    type:OftenOrderType,
    info:IInfoType
}