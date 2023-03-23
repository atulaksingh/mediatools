import Image from "next/image";
import Link from "next/link";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function Features() {
  const [counterOn, setCounterOn] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { rotateY : 360 },
      { rotationX: 360, duration: 0.5, scrollTrigger: { trigger: el } }
    );
  }, []);

  return (
    <>
      <div className="container mx-auto bg-white text-black ">
        <div className="text-center">
          <div ref={imgRef} className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="90"
              fill="none"
              viewBox="0 0 116 101"
            >
              <path
                fill="#fff"
                stroke="#000"
                d="M58.5 99.5V2L115 67 58.5 99.5z"
              ></path>
              <path
                fill="#E6E8DD"
                d="M1 67l56.5 32.5V2L45.765 15.5 36.638 26l-8.465 9.74L19 46.292 10.562 56 1 67z"
              ></path>
              <path
                stroke="#000"
                d="M45.765 15.5L57.5 2v20m-11.735-6.5L57.5 22m-11.735-6.5L36.638 26M57.5 22v17m0 0L36.639 26M57.5 39v16M36.639 26l-8.467 9.74m0 0L57.5 55M28.172 35.74L19 46.292M57.5 55v15m0 0L19 46.292M57.5 70v15.5M19 46.292L10.562 56m0 0L1 67l56.5 32.5v-14M10.562 56L57.5 85.5"
              ></path>
            </svg>
          </div>
          <h1 className="font-bold text-xl sm:text-4xl pb-2 sm:pb-5">
            Features
          </h1>
          <p className="text-base sm:text-lg w-full sm:w-[90%] m-auto">
            Simple functional and modern design can help you easy control your
            money
          </p>
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1204"
            height="659"
            fill="none"
            viewBox="0 0 1304 659"
            className=" hidden lg:block mx-auto"
          >
            <path
              stroke="#000"
              strokeWidth="3"
              d="M277.5 4.5l-273 329 448.5 321 159.5-333 625.5-87 61.5 307"
            ></path>
            <circle cx="277.5" cy="4.5" r="4.5" fill="#000"></circle>
            <circle cx="4.5" cy="333.5" r="4.5" fill="#000"></circle>
            <circle cx="453.5" cy="654.5" r="4.5" fill="#000"></circle>
            <circle cx="612.5" cy="321.5" r="4.5" fill="#000"></circle>
            <circle cx="1238.5" cy="233.5" r="4.5" fill="#000"></circle>
            <circle cx="1299.5" cy="538.5" r="4.5" fill="#000"></circle>
          </svg>
          <div className="absolute h-full w-full lg:top-10 ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden ">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="col-span-1 flex justify-end align-middle items-center my-auto "
              >
                <div className="bg-black w-[80%] mt-10 lg:mt-32 lg:mr-16 mx-auto lg:mx-0">
                  <div className="bg-white text-black  ml-[15px] mb-[15px] -mr-[15px]  -mt-[15px] p-3 sm:p-5 lg:p-7 border border-black">
                    <h1 className="text-[18px] sm:text-[23px] lg:text-[26.72px] font-bold">
                      Mediatool for Agencies
                    </h1>
                    <div className="text-[13px]">
                      Grow revenue with confidence, using real-time performance
                      data to optimise investment.
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">technical support 24/7</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Get more done in less time</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Save hours on reporting</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">All plans and campaigns in</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Collaborate like never before</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="col-span-1 flex justify-start align-middle items-center my-auto mb-10"
              >
                <div className="bg-[#6ADA82] w-[80%] lg:mt-28 lg:ml-3 mx-auto  lg:mx-0">
                  <div className="bg-white text-black  mr-[15px] mt-[15px] -ml-[15px]  -mb-[15px] p-3 sm:p-5 lg:p-7 border border-black">
                    <h1 className="text-[18px] sm:text-[23px] lg:text-[26.72px] font-bold">
                      Mediatool for Agencies
                    </h1>
                    <div className="text-[13px]">
                      Grow revenue with confidence, using real-time performance
                      data to optimise investment.
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">technical support 24/7</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Get more done in less time</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Save hours on reporting</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">All plans and campaigns in</p>
                    </div>
                    <div className="flex justify-start gap-1 sm:gap-3 align-middle items-center py-0.5 sm:py-2.5">
                      <div className="bg-[#6ADA82]">
                        <BsCheckLg className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="text-sm ">Collaborate like never before</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
