import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto  py-8 ">
          <div className="grid grid-cols-12 gap-5 lg:gap-0">
            <div className="col-span-6 lg:col-span-2 text-center lg:text-left">
              <div className="text-[22px] font-[500]">Menu</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">How it works</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">Payments</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">Pricing</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">Blog</div>
            </div>
            <div className="col-span-6 lg:col-span-2 text-center  lg:text-left">
              <div className="text-[22px] font-[500]">SUPPORT</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">Help center</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400  py-1 font-[300]">FAQ</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400   py-1 font-[300]">Apps status</div>
            </div>
         
            <div className="col-span-6 lg:col-span-2 text-center  lg:text-left">
              <div className="text-[22px] font-[500]">LEGAL</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400 font-[200]">Terms and conditions</div>
            </div>
            <div className="col-span-6 lg:col-span-2 text-center  lg:text-left">
              <div className="text-[22px] lg:text-[21px] font-[500]">CONTACT US</div>
              <div className="text-[16px] lg:text-[13px] text-gray-400 font-[200]">hi@zezo.com</div>
            </div>
            <div className="lg:block hidden lg:col-span-4">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="93"
                  fill="none"
                  viewBox="0 0 101 93"
                >
                  <ellipse
                    cx="39.246"
                    cy="35.072"
                    fill="#fff"
                    rx="35.441"
                    ry="17.207"
                    transform="rotate(-35.264 39.246 35.072)"
                  ></ellipse>
                  <path
                    fill="#E7E8DF"
                    stroke="#E6E8DE"
                    strokeWidth="1.126"
                    d="M25.323 63.786l-9.796-1.088a.124.124 0 00-.113.197L36.6 91.33c.022.03.055.048.092.05l9.248.544a.124.124 0 00.107-.198l-20.64-27.89a.124.124 0 00-.085-.05zM71.544 28.84l1.079-8.092a.124.124 0 01.222-.058l19.493 26.176a.124.124 0 01.024.085l-.8 8.774a.124.124 0 01-.224.062L71.567 28.93a.124.124 0 01-.023-.09zM39.358 58.204l-9.901 4.4a.124.124 0 00-.05.186l20.686 28.514a.124.124 0 00.138.045l10.448-3.3a.124.124 0 00.063-.19L39.509 58.246a.124.124 0 00-.151-.041zM64.283 39.51l6.028-7.124a.124.124 0 01.193.006L90.626 59.22a.124.124 0 01.005.14l-5.223 8.15a.124.124 0 01-.203.007L64.278 39.665a.124.124 0 01.005-.155z"
                  ></path>
                  <path
                    fill="#E7E9DF"
                    stroke="#E6E8DE"
                    strokeWidth="1.126"
                    d="M42.93 56.966l8.805-6.053a.124.124 0 01.17.029l21.247 29.074a.124.124 0 01-.029.174l-9.365 6.611a.124.124 0 01-.173-.03L42.899 57.139a.124.124 0 01.031-.173zM54.73 49.082l7.136-6.588a.124.124 0 01.184.017l21.243 28.51a.124.124 0 01-.015.165l-7.697 7.146a.124.124 0 01-.185-.018l-20.684-29.07a.124.124 0 01.017-.162z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-400 my-5"></div>
          <div className="flex flex-col sm:gap-0 gap-5  sm:flex-row justify-between  align-middle items-center">
            <div className=" text-sm">
              <Image
                src={
                  "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679058965/Mask_group_3_cwsh0t.png"
                }
                alt=""
                height={120}
                width={120}
              />
            </div>
            <div className="text-[17px] sm:text-[16px]">2023 zezo. all rights reserved</div>
            <div className="flex gap-5">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="39"
                  fill="none"
                  viewBox="0 0 11 19"
                  className="border rounded-full border-white cursor-pointer hover:border-green-500 p-2"
                >
                  <path
                    fill="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.126"
                    d="M9.957 1.205H7.501A4.094 4.094 0 003.406 5.3v2.457H.95v3.275h2.456v6.55h3.276v-6.55h2.456l.819-3.275H6.682V5.299A.819.819 0 017.5 4.48h2.456V1.205z"
                  ></path>
                </svg>
              </div>
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="39"
                  fill="none"
                  viewBox="0 0 18 18"
                  className="border rounded-full border-white cursor-pointer hover:border-green-500 p-2"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.576"
                    d="M13.066 1.205H5.184a3.94 3.94 0 00-3.94 3.94v7.882a3.94 3.94 0 003.94 3.94h7.882a3.94 3.94 0 003.94-3.94V5.146a3.94 3.94 0 00-3.94-3.94z"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.576"
                    d="M12.278 8.59a3.153 3.153 0 11-6.238.925 3.153 3.153 0 016.238-.925zM13.46 4.751h.009"
                  ></path>
                </svg>
              </div>
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="39  "
                  fill="none"
                  viewBox="0 0 18 15"
                  className="border rounded-full border-white cursor-pointer hover:border-green-500 p-2"
                >
                  <path
                    fill="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.126"
                    d="M16.678 1.464a7.809 7.809 0 01-2.25 1.096 3.21 3.21 0 00-5.631 2.15v.716A7.638 7.638 0 012.348 2.18s-2.865 6.448 3.583 9.314a8.34 8.34 0 01-5.015 1.433c6.448 3.583 14.329 0 14.329-8.24 0-.199-.02-.398-.057-.594a5.531 5.531 0 001.49-2.63z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
