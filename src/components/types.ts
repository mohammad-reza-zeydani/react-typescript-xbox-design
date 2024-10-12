export type TBtnObject ={
    btnsTitle:string,
    titleBtns:Array<string>
}
export type TNavBtnsData= {
    title:string
    btns?:Array<string>
    extraBtns?:TBtnObject[]
    large?:boolean,
   extraMenu?:boolean
}
export type TAllMicrosoft ={
    mainTitle:string,
    links:Array<string>,
    btns:TBtnObject[]
}
