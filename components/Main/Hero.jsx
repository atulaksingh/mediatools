import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { AiOutlineApple } from 'react-icons/ai';
import { useEffect, useState } from "react";

function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    AOS.init();
    function handleScroll() {
      if (window.scrollY > 100) {
        // Replace 100 with the number of pixels you want the user to scroll before the animation starts
        setShouldAnimate(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container mx-auto pt-10 pb-20 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 my-auto">
            <div className=" sm:ml-5 lg:ml-14  my-auto">
              <div className="text-[40px]  sm:text-[50px] lg:text-[70px] leading-[45px] lg:leading-[78px] font-bold ">
                The power
                <div className="">to turn your </div>
                <div className="box"></div>
                marketing data
              </div>
              <div className="text-[17px] w-full lg:w-80 py-5">
                Our Product was created for easly management your spending and
                incomes
              </div>
              <div className="flex justify-start w-[100%] h-[45px]">
              <input type="text"  placeholder="Enter email" className="w-[100%] my-auto"
              />
               <div className="relative flex h-full w-full">
               <div className="herotitle absolute  top-1 left-1 right-0  bg-green-500 w-[50%]  my-auto h-full  flex"><span className=""></span>
                <div className="absolute top-0 -left-1 bottom-2  bg-black w-[100%] text-white my-auto h-full flex   "><span className="m-auto">adsks</span></div>
               </div>
                </div>
              </div>
              <div>

            
                {/* <div>
                  <input
                    placeholder="Enter your Email "
                    className="border border-black p-1 sm:p-2 w-32 sm:w-40 lg:w-60"
                  />

                  <button className=" bg-[#85fc8f] border border-black pb-[10px]  sm:pb-[15px]   px-7   text-green-300">
                    hsdh
                  </button>
                  <button className="bg-black -ml-[94px] sm:-ml-[102px] py-1.5 sm:py-2.5 px-2 text-white">
                    get started
                  </button>
                </div> */}
              </div>
              <div className="flex justify-start align-middle items-center gap-4 sm:gap-5 my-5">
                <div
                
                >
                   <Image 
                    src={'https://res.cloudinary.com/dt0j68vdr/image/upload/v1679030965/Stripe_ia8kzj.png'}
                    alt=""
                    height={50}
                    width={100}
                  />
                </div>
                <div
              
                >
                  <Image 
                    src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1679031034/Mask_group_2_xlew9p.png"}
                    alt=""
                    height={50}
                    width={100}
                  />
                </div>
                <div
           
                >
                  <Image 
                    src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1679031013/Group_28_yapi9z.png"}
                    alt=""
                    height={50}
                    width={100}
                  />
                </div>
                <div
               
                >
                    <Image 
                    src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1679031097/Group_66_a1qpbw.png"}
                    alt=""
                    height={50}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 m-auto ">
            <div className="mt-5">
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                // className="relative w-[410px] h-[350px] sm:w-[500px] sm:h-[400px]  lg:w-[650px] lg:h-[500px]"
                // className="  w-full h-96   "
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679032153/image_processing20210908-27736-1xnn8wl_1_bz32df.gif"
                  }
                  alt
                  // layout="fill"
                  height={100}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
