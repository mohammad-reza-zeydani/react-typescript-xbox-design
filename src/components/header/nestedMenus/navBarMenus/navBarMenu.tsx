import ExpandedMenus from "../expandedMenus";
const NavBarMenu = ({ data }: any) => {
  return (
    <ul className='bg-neutral-100 text-black shadow-md border-b border-black'>
      {data.map((btn:any) => {
        return (
          <div className='flex flex-col divide-y divide-neutral-200 sm:text-lg'>
            <a className='py-3 px-5 active:bg-neutral-200' href='#'>
              {btn.mainTitle}
            </a>
            <a className='flex flex-col divide-y divide-neutral-200' href='#'>
              {btn.links.map((link: string) => (
                <span className='px-5 py-3 active:bg-neutral-200'>{link}</span>
              ))}
            </a>
            <div className='flex flex-col items-start  divide-y divide-neutral-200'>
              {btn.btns.map((b: any) => {
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
