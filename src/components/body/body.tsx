import { TBodyData } from "../types";
import { BodyImages } from "./bodyData";
import { BodyData } from "./bodyData";
import Button from "./button";
const Body = () => {
  return (
    // body main dev
    <main className=' space-y-10 lg:space-y-20 child:space-y-10 child:lg:space-y-20'>
      {/* body section one = Explore the world of Xbox*/}
      <section>
        <div className='text-center  space-y-12 px-5'>
          <h1 className=' text-3xl font-bold md:hidden'>Xbox One S</h1>
          <h1 className=' text-2xl sm:text-4xl xl:text-5xl font-bold'>
            Explore the world of Xbox
          </h1>
        </div>
        <div className=' flex flex-col xl:flex-row justify-center items-center xl:px-12'>
          {/* the images of section one  */}
          {BodyImages.xbox.map((image) => {
            return (
              <>
                <img
                  className='w-full h-96 sm:h-80 lg:h-96 xl:w-1/2 '
                  src={image.X1}
                  alt=''
                />
                <div className='flex w-full flex-col sm:flex-row child:h-96  sm:child:h-80 child:w-full xl:w-auto xl:child:w-96 xl:child:h-96'>
                  <img src={image.X2} alt='' />
                  <img src={image.X3} alt='' />
                </div>
              </>
            );
          })}
        </div>
      </section>
      {/*body section two = Play over 1,300 games*/}
      <section>
        <div className='text-center space-y-5'>
          <h1 className=' text-4xl sm:text-5xl font-bold'>
            Play over 1,300 games
          </h1>
          <p className=' text-base sm:text-lg lg:text-xl w-4/5 font-serif mx-auto'>
            Play the biggest blockbusters, most popular franchises, and Xbox
            classics from three generations of favorites that you can play again
            or experience for the first time.
          </p>
          <Button title={"SHOP GAMES"} />
        </div>
        <img className='mx-auto  xl:px-12' src={BodyImages.Games} alt='' />
      </section>
      {/*body section three  = Enjoy the convenience of a digital library*/}
      <section>
        <div className='flex flex-col gap-y-12 justify-center items-center'>
          <h1 className=' text-3xl text-center sm:text-4xl lg:text-[40px] font-bold'>
            Enjoy the convenience of a digital library
          </h1>
          <div className='flex flex-col  px-10 gap-y-8 lg:flex-row items-start lg:items-center w-11/12'>
            {/* map the objects from 0 to 3 from BodyData */}
            {BodyData.slice(0, 3).map((object: TBodyData) => {
              return (
                <div className='flex items-center  justify-start lg:justify-center gap-x-10 w-full'>
                  <div className=' child:w-20 xl:child:w-24'>
                    {/* if object has svg,give the related svg */}
                    {object.svg === "Cloud" && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z'
                        />
                      </svg>
                    )}
                    {object.svg === "Digital" && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z'
                        />
                      </svg>
                    )}
                    {object.svg === "Install" && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h2 className='text-lg font-bold'>{object.title}</h2>
                    <p className='font-serif  lg:w-48'>{object.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='space-y-10 lg:space-y-20'>
          <div className='relative '>
            {/* mobile image */}
            <img
              src={BodyImages.mobileGamePass}
              className='md:hidden '
              alt=''
            />
            {/* desktop image */}
            <img
              src={BodyImages.desktopGamePass}
              className='hidden md:block'
              alt=''
            />
            <div className=' w-full h-1/2 md:h-full text-center text-white flex flex-col space-y-4 sm:space-y-8 justify-center items-center absolute top-0 left-0 right-0 bottom-0 m-auto'>
              <h3 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>
                GAME PASS
              </h3>
              <div className='flex flex-col items-center space-y-3 xl:gap-y-4'>
                <h3 className='text-3xl md:text-4xl xl:text-6xl font-bold w-11/12 sm:w-4/5'>
                  Discover your next favorite game
                </h3>
                <p className='text-base md:text-lg xl:text-2xl w-4/5 sm:w-3/5'>
                  Enjoy hundreds of high-quality games. With games added all the
                  time, there’s always something new to play.
                </p>
                <Button title='LEARN MORE' />
              </div>
            </div>
          </div>
          <img className='' src={BodyImages.strangerThings} alt='' />
        </div>
      </section>
      {/*body section four = 4K entertainment*/}
      <section>
        <div className='w-11/12 mx-auto'>
          <div className='space-y-12'>
            <h1 className='font-bold text-3xl sm:text-5xl lg:text-7xl text-center'>
              4K entertainment
            </h1>
            <div className=' flex flex-col lg:flex-row gap-y-20 justify-center gap-x-8 items-start'>
              {/* map the objects from 3 to the end from BodyData */}
              {BodyData.slice(3).map((object: TBodyData) => {
                return (
                  <div>
                    <h2 className='text-lg font-bold'>{object.title}</h2>
                    <p className='font-serif md:text-lg w-full'>
                      {object.text}
                    </p>
                    <div>
                      {/* if the object involvs button give the custom button component */}
                      {object.button && <Button title='XBOX ENTERTAINMENT' />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start md:flex-none md:relative'>
          {/* mobile image  */}
          <img className='md:hidden' src={BodyImages.controllerMobile} />
          {/* dsek top image */}
          <img
            className='hidden md:block relative'
            src={BodyImages.controllerDeskTop}
            alt=''
          />
          <div className='w-10/12  text-center md:text-left md:w-auto md:absolute flex flex-col gap-y-4 justify-center items-start h-full left-[60%]'>
            <div className='space-y-2'>
              <h2 className='font-bold text-xl md:text-3xl lg:text-5xl xl:text-6xl'>
                Elevate your game
              </h2>
              <p className='text-lg xl:text-xl w-full md:w-4/5 '>
                Get an extra controller, headset to play with friends, or extra
                storage. All Xbox One gaming accessories are compatible.
              </p>
            </div>
            <div className='mx-auto md:mx-0'>
              <Button title='SHOP XBOX ACCESSORIES' />
            </div>
          </div>
        </div>
      </section>
      {/*body section five = Need additional help with your Xbox One S?*/}
      <section>
        <div className='w-10/12 md:w-11/12 mx-auto border-[3px] border-green-800 text-center p-8 space-y-2'>
          <h2 className='font-bold text-2xl md:text-3xl xl:text-4xl'>
            Need additional help with your Xbox One S?
          </h2>
          <Button title='VISIT SUPPORT' />
        </div>
        <div className='md:relative flex flex-col-reverse'>
          <div className='md:absolute  md:h-full md:w-1/2  flex flex-col justify-center items-center'>
            <div className='text-center md:text-start md:w-2/3 space-y-4'>
              <h2 className='font-extrabold text-3xl md:text-4xl lg:text-6xl'>
                UPGRADE TO XBOX SERIES X|S
              </h2>
              <div className=' mx-auto md:mx-0 w-14 h-3 bg-lime-500 -skew-x-[30deg]'></div>
              <p className=' text-xl md:text-2xl'>
                Experience next-gen performance
              </p>
              <Button title='LEARN MORE' />
            </div>
          </div>
          {/* desktop image */}
          <img
            className='hidden md:block'
            src={BodyImages.xboxdeskTop}
            alt=''
          />
          {/* mobile image */}
          <img className='md:hidden' src={BodyImages.xboxMobile} alt='' />
        </div>
      </section>
    </main>
  );
};

export default Body;
