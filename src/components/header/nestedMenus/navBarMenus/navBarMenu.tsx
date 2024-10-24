import { TAllMicrosoft, TBtnObject } from "../../../types";
import ExpandedMenus from "./expandedMenus";
const NavBarMenu = ({ data }:{data:TAllMicrosoft[]}) => {
  return (
    <ul className=' bg-neutral-100 z-50 text-black shadow-md border-b border-black'>
      {data.map((btn) => {
        return (
          <div className='flex-divide sm:text-lg'>
            <a className='py-3 px-5 active:bg-neutral-200' href='#'>
              {btn.mainTitle}
            </a>
            <a className='flex-divide' href='#'>
              {btn.links.map((link: string) => (
                <span className='px-5 py-3 active:bg-neutral-200'>{link}</span>
              ))}
            </a>
            <div className='flex flex-col items-start  divide-y divide-neutral-200'>
              {btn.btns.map((b:TBtnObject) => {
                return (
                 <ExpandedMenus data={b}/>
                );
              })}
            </div>
          </div>
        );
      })}
    </ul>
  );
};
export default NavBarMenu;
