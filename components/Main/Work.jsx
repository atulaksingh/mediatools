import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Work() {
  useEffect(() => {
    AOS.init();
  });
  const imgRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    const el1 = imgRef1.current;
    const el2 = imgRef2.current;
    gsap.fromTo(
      el,
      { rotateX: 360 },
      {
        rotateY: 360,
        duration: 0.5,
        delay:0.5,
        
        scrollTrigger: { trigger: el, toggleActions: "restart none none none" },
      }
    );
    gsap.fromTo(
      el1,
      { rotateX: 360},
      {
        rotationY: 360,
        duration: 0.5,
        delay:0.7,
        scrollTrigger: {
          trigger: el1,
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      el2,
      { rotateX: 360 },
      { rotateY: 360,      duration: 0.5,
        delay:1, scrollTrigger: { trigger: el2 ,toggleActions: "restart none none none",} }
    );
  }, []);

  return (
    <>
      <div className="container mx-auto pb-10 bg-white text-black">
        <div className="text-center ">
          <div className="font-bold text-xl sm:text-2xl lg:text-4xl py-2 sm:py-5 w-full lg:w-[30%] mx-auto">
            Manage your marketing activities
          </div>
          <div className="text-sm sm:text-lg w-full lg:w-[40%] m-auto">
            Mediatool helps you manage every step of your marketing activities.
            <br />
            <span className="bg-[#85fc8f] sm:text-lg font-bold">
             
              From briefing to presenting your results.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-10 lg:gap-16  pt-10  sm:mx-10">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-span-1   py-5 lg:py-10 "
          >
            <div className="text-center   ">
              <div ref={imgRef} className="djj inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="63"
                  fill="none"
                  viewBox="0 0 40 63"
                  className="rotate_01"
                >
                  <path
                    fill="#E7E8DE"
                    stroke="#000"
                    strokeWidth="2.181"
                    d="M2.008 54.67V19.234l3.27 2.726 2.182 1.09 2.18.545 3.816 1.09h2.181l3.816.546h2.181l1.636-.545h1.635l2.726-.546 3.271-.545 2.726-1.09 2.726-2.18 1.636-1.091-.546 35.436c-1.09 8.723-33.255 9.268-35.436 0z"
                  ></path>
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2.181"
                    d="M38.534 17.053c0 1.891-1.663 3.933-5.123 5.568-3.376 1.594-8.117 2.61-13.413 2.61-5.295 0-10.036-1.016-13.412-2.61-3.46-1.634-5.124-3.677-5.124-5.568 0-1.89 1.664-3.933 5.124-5.567 3.376-1.595 8.117-2.61 13.412-2.61 5.296 0 10.037 1.015 13.413 2.61 3.46 1.634 5.123 3.676 5.123 5.567z"
                  ></path>
                  <path
                    fill="#6ADA82"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M33.628 12.692c0 2.557-1.424 4.44-3.86 5.714-2.457 1.285-5.902 1.918-9.77 1.918-3.866 0-7.317-.633-9.78-1.86-2.452-1.22-3.85-2.982-3.85-5.261 0-1.992 1.41-4.018 3.897-5.576 2.47-1.548 5.91-2.568 9.733-2.568 3.836 0 7.282.898 9.75 2.322 2.484 1.433 3.88 3.33 3.88 5.31z"
                  ></path>
                  <path
                    fill="#D9D9D9"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M33.628 7.24c0 1.64-1.343 3.27-3.85 4.524-2.475 1.237-5.932 2.018-9.78 2.018-3.848 0-7.304-.78-9.779-2.018C7.712 10.51 6.37 8.879 6.37 7.24c0-1.64 1.343-3.27 3.85-4.524C12.694 1.48 16.15.698 20 .698c3.847 0 7.304.78 9.779 2.018 2.507 1.254 3.85 2.885 3.85 4.524z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M6.369 7.24v5.997M33.628 7.24v5.452"
                  ></path>
                </svg>
              </div>
              <h1 className="font-bold text-[20px] py-3">
                Plan collaboratively
              </h1>
              <div className="text-[16px] ">
                With Mediatools collaboration features your entire team is on
                the same page no matter where they are around the world.
              </div>
              <div className="flex gap-1 mx-auto my-3 cursor-pointer justify-center align-middle items-center border border-black  w-32 px- py-2">
                <h1>Learn More</h1>
                <div className="mt-1">
                  <HiOutlineArrowSmRight size={20} />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-span-1  py-5 lg:py-10"
          >
            <div className="text-center  ">
              <div ref={imgRef1} className="djj inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="61"
                  fill="none"
                  viewBox="0 0 41 61"
                  className="rotate_01"
                >
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M20.186 22.669l-18.7-7.48a.12.12 0 01.015-.227l18.696-4.808a.12.12 0 01.061 0l19.768 5.344c.114.03.12.19.008.228L20.27 22.671a.12.12 0 01-.084-.002z"
                  ></path>
                  <path
                    fill="#D9D9D9"
                    d="M1.692 15.598l18.536 7.088 19.626-7.088v36.527l-19.626 7.633-18.536-6.543V15.599z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M20.228 22.686L1.692 15.598v7.36m18.536-.272l19.626-7.088v7.36m-19.626-.272v7.36m0 29.712l19.626-7.633v-7.087m-19.626 14.72L1.692 53.215v-7.087m18.536 13.63V52.67m0 0L1.692 46.128m18.536 6.542l19.626-7.632M20.228 52.67v-7.632m-18.536 1.09v-7.632m38.162 6.542V37.95m0 0l-19.626 7.087m19.626-7.087v-7.633m-19.626 14.72L1.692 38.496m18.536 6.542v-7.633m-18.536 1.09v-8.177m18.536 7.087l19.626-7.087m-19.626 7.087L1.692 30.318m18.536 7.087v-7.36m19.626.273v-7.36m-38.162 7.36v-7.36m0 0l18.536 7.088m0 0l19.626-7.088"
                  ></path>
                  <path
                    fill="#6ADA82"
                    d="M22.954 1.424l2.726 14.174c-1.737 1.39-4.19 1.903-5.997 1.926-2.732.035-5.23-1.05-6.543-1.926l3.817-14.174h5.997z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M19.683 17.524c-2.732.035-5.23-1.05-6.543-1.926l3.817-14.174h2.998m-.272 16.1c1.806-.023 4.26-.537 5.997-1.926L22.954 1.424h-2.999m-.272 16.1l.272-16.1"
                  ></path>
                </svg>
              </div>
              <h1 className="font-bold text-[20px] py-3">
                Plan collaboratively
              </h1>
              <div className="text-[16px] ">
                With Mediatools collaboration features your entire team is on
                the same page no matter where they are around the world.
              </div>
              <div className="flex gap-1 mx-auto my-3 cursor-pointer justify-center align-middle items-center border border-black  w-32 px- py-2">
                <h1>Learn More</h1>
                <div className="mt-1">
                  <HiOutlineArrowSmRight size={20} />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-span-1  py-5 lg:py-10"
          >
            <div className="text-center  ">
              <div ref={imgRef2} className="djj inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="62"
                  fill="none"
                  viewBox="0 0 46 62"
                  className="rotate_01"
                >
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M44.995 13.225L23.426.823a.12.12 0 00-.12 0L1.186 13.771a.12.12 0 00-.002.206l21.03 12.942a.12.12 0 00.124 0l22.659-13.487a.12.12 0 00-.002-.207z"
                  ></path>
                  <path
                    fill="#6ADA82"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M22.22 26.922L1.196 13.985a.12.12 0 00-.182.102v35.15a.12.12 0 00.064.106l21.564 11.32a.12.12 0 00.175-.107l-.54-33.534a.12.12 0 00-.057-.1z"
                  ></path>
                  <path
                    fill="#D9D9D9"
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M22.878 26.922l22.113-13.484a.12.12 0 01.182.103v35.15a.12.12 0 01-.063.107L22.997 60.663a.12.12 0 01-.176-.106V27.024a.12.12 0 01.057-.102z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeWidth="1.09"
                    d="M26.637 24.776v33.607c0 .089.094.147.174.107l4.12-2.06a.12.12 0 00.066-.11l-.542-34.199a.12.12 0 01.06-.106l4.12-2.333a.12.12 0 01.18.105v34.236a.12.12 0 00.172.108l3.577-1.745a.12.12 0 00.067-.108V17.75a.12.12 0 01.05-.097l3.573-2.552a.12.12 0 01.19.1l-.54 35.077a.12.12 0 00.12.121h.423"
                  ></path>
                </svg>
              </div>
              <h1 className="font-bold text-[20px] py-3">
                Plan collaboratively
              </h1>
              <div className="text-[16px] ">
                With Mediatools collaboration features your entire team is on
                the same page no matter where they are around the world.
              </div>
              <div className="flex gap-1 mx-auto my-3 cursor-pointer justify-center align-middle items-center border border-black  w-32 px- py-2">
                <h1>Learn More</h1>
                <div className="mt-1">
                  <HiOutlineArrowSmRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
