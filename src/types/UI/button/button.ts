import { ButtonSize } from "./buttonSize";
import { ButtonType } from "./buttonType";

export interface IButton {
  type: ButtonType,
  func?: Function,
  text: {
    am:string,
    en:string,
    ru:string
  },
  link?:string,
  size:ButtonSize
}
