import { useState } from "react";
import ExtraMenus from "./extraMenus";
import { TBtnObject, TNavBtnsData } from "../../../types";
const XboxMenu = ({ data }: { data: TNavBtnsData }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <button 
        onClick={() => setOpenMenu(!openMenu)}
        className='btn px-1 sm:px-7 text-xl  bg-neutral-100'>
        <h1>{data.mainTitle}</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={`size-6 ${openMenu ? "rotate-180" : "rotate-0"}`}>
          <path
            fillRule='evenodd'
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {openMenu && (
        <div className='flex-divide w-full text-base bg-neutral-100 child:px-10'>
          {data.large === false
            ? data.btns?.map((button: string) => {
                return (
                  <a href='#' className='py-3 w-full active:bg-neutral-200'>
                    <span className="border-b border-black text-zinc-800">
                    {button}
                    </span>
                  </a>
                );
              })
            : data.extraBtns?.map((button: TBtnObject) => {
                return button.buttons.length !== 0 ? (
                  <ExtraMenus data={button} />
                ) : (
                  <a className='py-3 pl-12 active:bg-neutral-200 group' href='#'>
                    <span className="border-b border-black text-zinc-800 group-active:text-zinc-600">
                    {button.title}
                    </span>
                  </a>
                );
              })}
        </div>
      )}
    </>
  );
};

export default XboxMenu;
