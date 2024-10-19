import { useState } from "react";
const ExpandedMenus = ({ data }: any) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className='w-full'>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className='flex w-full justify-between px-5 py-3 focus:bg-neutral-200'>
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
      {openMenu ? (
        <div className='flex w-full flex-col divide-y divide-neutral-200 pl-10 text-sm sm:text-base'>
          {data.buttons.map((button: string) => {
            return <a href="#" className="py-3 w-full active:bg-neutral-200">{button}</a>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ExpandedMenus;
