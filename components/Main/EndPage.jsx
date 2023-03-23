import Image from "next/image";
import React from "react";
import Vivus from 'vivus';
import { useRef, useEffect, useState } from "react";
function EndPage() {
  const [counterOn, setCounterOn] = useState(false);
  const heroRef = useRef(null);

  return (
    <>
      <div className="container mx-auto mt-[550px] lg:mt-0 py-20 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-[25px] sm:text-[32px] text-center lg:text-[50px] font-[700] lg:leading-[60px] w-full lg:w-[80%] mx-auto">
            What our customers say about us
          </div>
          <div>
            <div className="sm:text-[17.28px] py-2 text-center lg:text-left w-[100%] lg:w-[70%]">
              {" "}
              Our users save many hours every month thanks to planning tools,
              instant data integrations, automated data visualisation tools and
              a workspace tailored to your organisation.
            </div>
            <div className="cursor-pointer underline text-[17px] text-center sm:text-[19px] font-[600]">
              View All Testimonials
            </div>
          </div>
        </div>
        <div  className="logo grid grid-cols-1 lg:grid-cols-3 my-5 "   >
          <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="col-span-1"
          >
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="40"
                fill="none"
                viewBox="0 0 8 49"
              >
                <path stroke="#000" strokeWidth="2" d="M1 48L3.5 5"></path>
                <circle cx="4" cy="4" r="4" fill="#000"></circle>
              </svg>
            </div>

            <div className=" w-[90%] sm:w-[80%] bg-black h-36  relative mx-auto">
              <div className="absolute top-4 left-4  w-full bg-white p-3 sm:p-5 border border-black">
                <div className="flex gap-2">
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                      }
                      alt=""
                      height={40}
                      width={40}
                    />
                  </div>
                  <div>
                    <h1 className="text-[15.24px] font-[700]">
                      Casey Amstrong
                    </h1>
                    <div className="text-[12px] font-[500]">ABM</div>
                  </div>
                </div>
                <div className="text-[15px] mt-2 line-clamp-3">
                  The positive feedback from our customers and prospective
                  customers on the website was instantaneous.
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="41"
                fill="none"
                viewBox="0 0 21 41"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M9 1.502l10.386 8.901a.11.11 0 01-.014.178L6.64 18.415a.11.11 0 00-.007.183l12.239 8.812a.11.11 0 01-.002.18L1.5 39.502"
                ></path>
              </svg>
            </div>
            <div className="w-[90%] sm:w-[80%] mx-auto lg:mx-0   lg:ml-[59px] bg-white p-3 sm:p-5 border border-black ">
              <div className="flex gap-2">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h1 className="text-[15.24px] font-[700]">Casey Amstrong</h1>
                  <div className="text-[12px] font-[500]">ABM</div>
                </div>
              </div>
              <div className="text-[15px] mt-2 line-clamp-5">
                The positive feedback from our customers and prospective
                customers on the website was instantaneous. The positive
                feedback from our customers and prospective customers on the
                website was instantaneous.
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="49"
                fill="none"
                viewBox="0 0 11 49"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M6.991.048l-.428 43.07"
                ></path>
                <circle
                  cx="6.112"
                  cy="44.142"
                  r="4"
                  fill="#000"
                  transform="rotate(177.243 6.112 44.142)"
                ></circle>
              </svg>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="col-span-1 mx-auto"
          >
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="40"
                fill="none"
                viewBox="0 0 8 49"
              >
                <path stroke="#000" strokeWidth="2" d="M1 48L3.5 5"></path>
                <circle cx="4" cy="4" r="4" fill="#000"></circle>
              </svg>
            </div>
            <div className="w-[90%] sm:w-[80%]   mx-auto bg-white p-3 sm:p-5 border border-black ">
              <div className="flex gap-2">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h1 className="text-[15.24px] font-[700]">Casey Amstrong</h1>
                  <div className="text-[12px] font-[500]">ABM</div>
                </div>
              </div>
              <div className="text-[15px] mt-2 line-clamp-5">
                The positive feedback from our customers and prospective
                customers on the website was instantaneous. The positive
                feedback from our customers and prospective customers on the
                website was instantaneous.
              </div>
            </div>
            <div className="flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="41"
                fill="none"
                viewBox="0 0 21 41"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M9 1.502l10.386 8.901a.11.11 0 01-.014.178L6.64 18.415a.11.11 0 00-.007.183l12.239 8.812a.11.11 0 01-.002.18L1.5 39.502"
                ></path>
              </svg>
            </div>
            <div className="w-[90%] sm:w-[80%]   mx-auto bg-white p-3 sm:p-5 border border-black ">
              <div className="flex gap-2">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h1 className="text-[15.24px] font-[700]">Casey Amstrong</h1>
                  <div className="text-[12px] font-[500]">ABM</div>
                </div>
              </div>
              <div className="text-[15px] mt-2 line-clamp-2">
                The positive feedback from our customers and prospective
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="49"
                fill="none"
                viewBox="0 0 11 49"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M6.991.048l-.428 43.07"
                ></path>
                <circle
                  cx="6.112"
                  cy="44.142"
                  r="4"
                  fill="#000"
                  transform="rotate(177.243 6.112 44.142)"
                ></circle>
              </svg>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="col-span-1 "
          >
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="40"
                fill="none"
                viewBox="0 0 8 49"
              >
                <path stroke="#000" strokeWidth="2" d="M1 48L3.5 5"></path>
                <circle cx="4" cy="4" r="4" fill="#000"></circle>
              </svg>
            </div>

            <div className="w-[90%] sm:w-[80%] mx-auto lg:mx-0  lg:ml-[59px] bg-white p-3 sm:p-5 border border-black ">
              <div className="flex gap-2">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h1 className="text-[15.24px] font-[700]">Casey Amstrong</h1>
                  <div className="text-[12px] font-[500]">ABM</div>
                </div>
              </div>
              <div className="text-[15px] mt-2 line-clamp-2">
                The positive feedback from our customers and prospective
                customers
              </div>
            </div>
            <div className="flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="41"
                fill="none"
                viewBox="0 0 21 41"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M9 1.502l10.386 8.901a.11.11 0 01-.014.178L6.64 18.415a.11.11 0 00-.007.183l12.239 8.812a.11.11 0 01-.002.18L1.5 39.502"
                ></path>
              </svg>
            </div>

            <div className="w-[90%] sm:w-[80%] bg-black h-48 sm:h-52  relative mx-auto lg:mx-0 lg:ml-[77px] mt-2">
              <div className="absolute bottom-4 right-4  w-full bg-white p-3 sm:p-5 border border-black">
                <div className="flex gap-2">
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679051487/Ellipse_26_xd8xe1.png"
                      }
                      alt=""
                      height={40}
                      width={40}
                    />
                  </div>
                  <div>
                    <h1 className="text-[15.24px] font-[700]">
                      Casey Amstrong
                    </h1>
                    <div className="text-[12px] font-[500]">ABM</div>
                  </div>
                </div>
                <div className="text-[15px] mt-2 line-clamp-5">
                  The positive feedback from our customers and prospective
                  customers on the website was instantaneous. on the website was
                  instantaneous. The positive feedback from our customers and
                  prospectiv
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="49"
                fill="none"
                viewBox="0 0 11 49"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  d="M6.991.048l-.428 43.07"
                ></path>
                <circle
                  cx="6.112"
                  cy="44.142"
                  r="4"
                  fill="#000"
                  transform="rotate(177.243 6.112 44.142)"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndPage;
