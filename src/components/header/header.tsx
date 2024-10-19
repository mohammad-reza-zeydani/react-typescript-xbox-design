import { Images } from "./headerData";
import { NavBtnsData } from "./headerData";
import { useState } from "react";
import { AllMicrosoft } from "./headerData";
import { TNavBtnsData, TBtnObject, TAllMicrosoft } from "../types";
import NavBarMenu from "./nestedMenus/navBarMenus/navBarMenu";
const Header = () => {
  const [titleName, setTitleName] = useState<string>("");
  // if openSearchBox is true,we will have search input in our navBar
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const [openNavBarMenu, setOpenNavBarMenu] = useState<boolean>(false);
  return (
    <header>
      {/* header mobile and tablet section */}
      <section className="xl:hidden">
        <nav>
          {/* navBar main div */}
          <div className='flex w-full items-center justify-between bg-white px-1 sm:px-7 border-y-2 child:py-2 border-neutral-300'>
            {/* navBar left contents */}
              <div className='flex gap-x-4 sm:gap-x-8 child:cursor-pointer items-center child:text-zinc-500'>
                {openNavBarMenu ? (
                  <svg
                  onClick={()=>setOpenNavBarMenu(!openNavBarMenu)}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-7 sm:size-10'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={()=>setOpenNavBarMenu(!openNavBarMenu)}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-7 sm:size-10'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='size-7 sm:size-10 rotate-90'>
                  <path
                    fillRule='evenodd'
                    d='M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            {/* navBar middle contents */}
            <div>
              <img className='w-24 sm:w-32 md:w-40' src={Images.microsoftLogo} alt='' />
            </div>
            {/* navBar right contents */}
            <div className='flex items-center gap-x-4 sm:gap-x-8 child:text-zinc-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-7 sm:size-10'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 sm:size-9'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </div>
          </div>
          {
            openNavBarMenu ? (
             <NavBarMenu data={AllMicrosoft}/>
            ):(null)
          }
          {
            openNavBarMenu ? (null):(
              <div className="bg-red-500">test2</div>
            )
          }

        </nav>
      </section>

      {/* header desktop section */}
      <section className='hidden xl:block'>
        <nav>
          {/* desktop header main dev */}
          <div className='flex relative justify-between px-20 bg-white'>
            {/* if openSearch box is true show search input otherwise show main navBar */}
            {openSearchBox ? (
              <form className='w-full flex items-center gap-x-4 px-5'>
                {/* microsoftLogo */}
                <img
                  className='w-[97px] py-5'
                  src={Images.microsoftLogo}
                  alt='microsoftLogo'
                />
                {/* search input */}
                <input
                  placeholder='Search Xbox.com'
                  className='w-5/6 py-2 px-3 outline-none border-2 border-black'
                  type='search'
                />
                {/* Cancel btns,if you click on this button,search input will be closed and main navBar will be appeard */}
                <button
                  className='border border-black px-7 py-2'
                  onClick={() => setOpenSearchBox(false)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                {/* if openSearchBox is false,we will have our main navBar */}
                {/* navigation left contents */}
                <div className='flex items-center gap-x-11 relative'>
                  {/* xbox and microsoft logo main div */}
                  <div className='flex items-center justify-center gap-x-2'>
                    {/* microsoftLogo */}
                    <img className='w-28' src={Images.microsoftLogo} alt='' />
                    <div className='h-6 w-[2px] bg-black'></div>
                    {/* xboxLogo */}
                    <img className='w-20' src={Images.xboxLogo} alt='' />
                  </div>
                  {/* navigation left contents main div */}
                  <div className='flex items-center'>
                    {/* having map on our navigation data */}
                    {NavBtnsData.map((btn: TNavBtnsData) => {
                      return (
                        <div
                          className={`flex flex-col ${
                            btn.large === true ? "items-center" : "items-start" // if our data has large size show the list of the buttons form center of the title of btn else show it from start ,
                          } group`}>
                          {/* main div of the titles from data  */}
                          <div className='flex py-5 px-2  items-center text-zinc-900 text-sm font-medium  border-t border-x border-dashed border-white hover:border-black hover:bg-neutral-200 transition-colors'>
                            {/* the title for each list */}
                            <h1 className='cursor-context-menu'>{btn.mainTitle}</h1>
                            {/* chevron-down-svg */}
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
                          </div>
                          {/* {the list of the btns,this menu will be appeard when you hover parent element } */}
                          <ul className='navBar-menu'>
                            {/* <<<<<<<<<<<<<<<<< the data that have extra menus >>>>>>>>>>>>>>>>>>>>>> */}
                            {btn.extraMenu === true &&(
                              <div
                                // after leaving the menu,set empty string for titleName state to close the menu by calling  onMouseLeave event
                                onMouseLeave={() => setTitleName("")}
                                className='flex'>
                                <div className='flex flex-col text-sm child-hover:bg-neutral-200'>
                                  {btn.extraBtns?.map((b: TBtnObject) => {
                                    return (
                                      <div
                                        // after hovering the title ,call onMouseEnter event to set it in the titleName state to show extra menu
                                        onMouseEnter={() =>
                                          setTitleName(b.title)
                                        }
                                        className='flex items-center justify-between child:py-5 child:px-5'>
                                        {/* if we have the list of buttons inside our buttons Array,dont consider title as link otherwise consider it as link */}
                                        {b.buttons.length !== 0 ? (
                                          <h1>{b.title}</h1>
                                        ) : (
                                          // title is link because it dosent have extra menu so we dont want to hover it,we want to click on it
                                          <a
                                            className='link-border group/border '
                                            href='#'>
                                            <span className='text-border'>
                                              {b.title}
                                            </span>
                                          </a>
                                        )}
                                        {/* if the buttons Array have a list of buttons inside,show chevron right svg to show taht the title is for hovring not for clicking because it has extra menu */}
                                        {b.buttons.length !== 0 && (
                                          <div>
                                            {/* chevron right svg */}
                                            <svg
                                              xmlns='http://www.w3.org/2000/svg'
                                              viewBox='0 0 20 20'
                                              fill='currentColor'
                                              className='size-4 text-zinc-800'>
                                              <path
                                                fillRule='evenodd'
                                                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                                                clipRule='evenodd'
                                              />
                                            </svg>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className='flex flex-col'>
                                  {btn.extraBtns?.map((b: TBtnObject) => {
                                    return (
                                      //if titleName state involvs the name of the title inside b.title show extra menu by hovring the title
                                      b.title === titleName && (
                                        <a href='#' className='flex flex-col'>
                                          {/* the buttons inside our extra menu */}
                                          {b.buttons.map((button: string) => (
                                            <span className=' py-5 px-5 text-sm font-semibold bg-neutral-400 hover:bg-neutral-200 active:border-black border-dashed border border-neutral-400 hover:border-neutral-200'>
                                              {button}
                                            </span>
                                          ))}
                                        </a>
                                      )
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                            {/* <<<<<<<<<<<<<<<<< the data that do not have large menus >>>>>>>>>>>>>>>>>>>>>> */}
                            {btn.large === false && (
                              // the list of buttons link inside our btns arry
                              <ul className='flex flex-col'>
                                {btn.btns?.map((b: string) => {
                                  // the buttons link inside the menu
                                  return (
                                    <a
                                      className='link-border group/border py-5 px-5 text-sm'
                                      href='#'>
                                      <span className='text-border'>{b}</span>
                                    </a>
                                  );
                                })}
                              </ul>
                            )}
                            {/* <<<<<<<<<<<<<<<<< the data that have large menus >>>>>>>>>>>>>>>>>>>>>> */}
                            {btn.large === true && (
                              <div
                                className={`flex items-start py-2 ${
                                  btn.mainTitle === "Community"
                                    ? "w-[800px]"
                                    : "w-[600px]"
                                }`}>
                                {btn.extraBtns?.map((b: TBtnObject) => {
                                  return (
                                    // the list of buttons link inside our large menu
                                    <ul className='flex flex-col'>
                                      {/* the titles of my buttons link  */}
                                      <h1 className='px-8 text-sm font-bold'>
                                        {b.title}
                                      </h1>
                                      {b.buttons.map((button: string) => (
                                        // the buttons link inside the menu
                                        <a
                                          className='px-8 py-3 text-sm link-border group/border'
                                          href='#'>
                                          <span className='text-border'>
                                            {button}
                                          </span>
                                        </a>
                                      ))}
                                    </ul>
                                  );
                                })}
                              </div>
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* navigation right contents */}
                <div className='flex items-center gap-x-2'>
                  <div className='flex items-center'>
                    {/* this data have the buttons link we have inside the menu under All Microsoft title in the navBar */}
                    {AllMicrosoft.map((object: TAllMicrosoft) => {
                      return (
                        <div className='flex flex-col items-end group'>
                          <div className='flex py-5 px-3  items-center text-zinc-900 text-sm font-medium  border-t border-x border-dashed border-white hover:border-black hover:bg-neutral-200 transition-colors'>
                            {/* the main title is All Microsoft we see in our navBar  */}
                            <h1 className='cursor-context-menu'>
                              {object.mainTitle}
                            </h1>
                            {/* chevron down svg */}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 16 16'
                              fill='currentColor'
                              className='size-4 text-zinc-700'>
                              <path
                                fillRule='evenodd'
                                d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
                          {/* the the list of the buttons link in the menu */}
                          <ul className='w-[1000px] navBar-menu'>
                            <div className='w-full flex items-center border-b-2 border-neutral-400'>
                              {/*the button links in the first line of the menu */}
                              {object.links.map((b: string) => {
                                return (
                                  <a
                                    className='p-3 text-sm text-zinc-700 group/border border border-neutral-100 active:border-black border-dashed'
                                    href='#'>
                                    <span className='group-hover/border:border-b border-black'>
                                      {b}
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                            {/* second line of the menu */}
                            <div className='flex justify-between'>
                              {object.btns.map((b: TBtnObject) => {
                                return (
                                  <div className='flex flex-col'>
                                    {/* the title of each colum of buttons */}
                                    <h1 className=' text-sm font-bold p-3'>
                                      {b.title}
                                    </h1>
                                    {/* the buttons under each colum */}
                                    {b.buttons.map((b: string) => (
                                      <a
                                        className='p-3 text-xs group/border border border-neutral-100 active:border-black border-dashed'
                                        href='#'>
                                        <span className='group-hover/border:border-b border-black'>
                                          {b}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                            {/* third line of the menu */}
                            <div className='bg-neutral-300 p-3 text-center'>
                              <a
                                className='inline-flex p-3 items-center border-neutral-300 border-2 border-dotted active:border-black'
                                href='#'>
                                <h2 className='text-zinc-700 border-b border-neutral-300 hover:border-black'>
                                  VIEW SITEMAP
                                </h2>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth={1.5}
                                  stroke='currentColor'
                                  className='size-5'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                                  />
                                </svg>
                              </a>
                            </div>
                          </ul>
                        </div>
                      );
                    })}
                    {/* search box button */}
                    <button
                      onClick={() => setOpenSearchBox(true)}
                      className='px-3 py-5 hover:bg-neutral-200 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='size-5 rotate-90'>
                        <path
                          fillRule='evenodd'
                          d='M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='flex child:py-4 child:px-3'>
                    {/* shop svg */}
                    <a className='group/border' href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 border-b-2 border-white group-hover/border:border-black transition-all '>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                        />
                      </svg>
                    </a>
                    <a className='group/border' href='#'>
                      {/* account svg */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 border-b-2 border-white group-hover/border:border-black transition-all'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* desktop header image */}
          <img src={Images.headerPic} />
          <h1 className=' text-6xl font-bold text-white text-center absolute left-0 right-0 top-24'>
            Xbox One S
          </h1>
        </nav>
      </section>
    </header>
  );
};

export default Header;
