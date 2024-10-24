import { useState } from "react";
import { TBtnObject } from "../../../types";
const ExtraMenus = ({ data }:{data:TBtnObject}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className='btn'>
        <h1>{data.title}</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={`size-5 ${openMenu ? "rotate-180" : "rotate-0"}`}>
          <path
            fillRule='evenodd'
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
     {openMenu &&
        data.buttons.map((b:string) => {
          return <a href="#" className="py-3 text-xs sm:text-sm text-green-950 font-bold active:bg-neutral-200">{b}</a>;
        })}
     
    </>
  );
};

export default ExtraMenus;
