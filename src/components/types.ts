export type TBtnObject = {
  title: string;
  buttons: Array<string>;
};
export type TNavBtnsData = {
  mainTitle: string;
  btns?: Array<string>;
  extraBtns?: TBtnObject[];
  large?: boolean;
  extraMenu?: boolean;
};
export type TAllMicrosoft = {
  mainTitle: string;
  links: Array<string>;
  btns: TBtnObject[];
};
export type TBodyData = {
  title: string;
  text: string;
  svg?: string;
  button?:boolean
};
