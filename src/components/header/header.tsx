import { Images } from "./headerData";
import { NavBtnsData } from "./headerData";
const Header = () => {
  return (
    <header>
      <section>
        <nav>
          <img className='relative' src={Images.headerPic} alt='' />
          <div className=' w-full absolute top-0 py-1 px-20 bg-white'>
            <div className="flex items-center gap-x-4 relative">
            <div className='flex items-center justify-center gap-x-3'>
              <img className='w-28' src={Images.microsoftLogo} alt='' />
              <div className='h-6 w-[2px] bg-black'></div>
              <img className='w-20' src={Images.xboxLogo} alt='' />
            </div>
            <ul>
              <div className="flex items-center gap-x-1">
              {NavBtnsData.map((btn: any) => {
                return (
                  <div className={`flex flex-col ${btn.title === "Community" ?"items-center":"items-start"} group h-12`}>
                    <a href="#" className='flex h-full items-center gap-x-1 text-zinc-900 text-sm font-medium hover:bg-neutral-300 transition-colors px-2'>
                      <button>
                        {btn.title}
                      </button>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='size-4'>
                        <path
                          fillRule='evenodd'
                          d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    <div className="bg-neutral-100 border-t-2 border-b-[3px] border-t-neutral-300 border-b-black absolute top-full shadow-xl py-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all delay-75 w-1/3 h-96">test</div>
                  </div>
                );
              })}
              </div>
            </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
