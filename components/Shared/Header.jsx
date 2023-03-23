import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log("abcd",isMenuOpen)
  const handleClick=()=>{
// setIsMenuOpen(false)
// console.log("click")
  }
  return (
    <>
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-12  py-2 bg-red-300">
          <div className="col-span-10 lg:col-span-2 font-[Hind] font-[600] text-2xl lg:m-auto">
            <Image
              src={
                "https://res.cloudinary.com/dt0j68vdr/image/upload/v1679287423/Mask_group_4_fqzxoc.png"
              }
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="lg:block hidden col-span-6 my-auto">
            <div className="flex justify-start gap-8 align-middle items-center  ">
              <div className="font-[600] text-gray-800 text-sm">
                How it works
              </div>
              <div className="font-[600] text-gray-800 text-sm">Features</div>
              <div className="font-[600] text-gray-800 text-sm">Support</div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-4 m-auto">
            <div className=" flex justify-end gap-10 align-middle items-center">
              <div className="lg:block hidden font-[600] text-sm">Sign In</div>
              <div className="lg:block hidden font-[600] text-base bg-black rounded-full text-white px-7 py-3 ">
                Get Started
              </div>
            </div>
            <button
            onClick={handleClick}
              data-collapse-toggle="navbar-cta"
              type="button"
              className=" inline-flex items-center p-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-7 h-7"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen == true ?

      <div className="relative w-full h-screen  bg-slate-400">

        <div className="absolute top-1/4  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="font-[600] text-gray-800 text-xl py-4">How it works</div>
          <div className="font-[600] text-gray-800 text-xl  py-4">Features</div>
          <div className="font-[600] text-gray-800 text-xl  py-5">Support</div>
          <div className="font-[600] text-xl  py-4">Sign In</div>
              <div className="w-40 font-[600] text-base bg-black rounded-full text-white px-7 py-3  mx-auto  py-4">
                Get Started
              </div>
        </div>
</div>
:
""
      } */}

      {/* <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
      <button onClick={setIsMenuOpen(false)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  {
    isMenuOpen  == true ? <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  :""
  }
 
  </div>
</nav> */}

      {/* <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav> */}

      {/* <Navbar className="">
        <Navbar.Brand>
          <img
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1679287423/Mask_group_4_fqzxoc.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className=" flex justify-end gap-10 align-middle items-center">
            <div className="lg:block hidden font-[600] text-sm">Sign In</div>
            <div className="lg:block hidden font-[600] text-base bg-black rounded-full text-white px-7 py-3 ">
              Get Started
            </div>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="font-[600] text-gray-800 text-base">
          <Navbar.Link className="font-[600] text-gray-800 text-base cursor-pointer">
            How its Work
          </Navbar.Link>
          <Navbar.Link className="font-[600] text-gray-800 text-base cursor-pointer">
            Features
          </Navbar.Link>
          <Navbar.Link className="font-[600] text-gray-800 text-base cursor-pointer">
            Support
          </Navbar.Link>
          <div className="lg:hidden block w-40 mx-auto  cursor-pointer font-[600] text-base bg-black rounded-full text-white px-7 py-3 my-5 ">
            Get Started
          </div>
        </Navbar.Collapse>
      </Navbar> */}
      <Navbar
      // fluid={true}
      // rounded={true}
      >
        <Navbar.Brand>
          <img
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1679287423/Mask_group_4_fqzxoc.png"
            className="mr-3 h-6 sm:h-9"
          />
        </Navbar.Brand>
        <div className="flex md:order-2 rounded-full">
          <Navbar className="md:block font-bold hidden">Sign IN</Navbar>
          <Button color={"dark"} className="md:block hidden rounded-full bg-black">
            Get started
          </Button>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className=" w-full h-[520px] md:h-full mx-auto">
          <Navbar className="font-bold text-base mx-auto py-5">Home</Navbar>
          <Navbar className="font-bold text-base mx-auto py-5">About</Navbar>
          <Navbar className="font-bold text-base mx-auto py-5">Services</Navbar>
          <Navbar className="md:hidden block  font-bold mx-auto text-base py-5">Sign In</Navbar>
          <Button className="md:hidden block w-32 mx-auto my-5 rounded-full " color={"dark"}>
            Get started
          </Button>
        </Navbar.Collapse>
      </Navbar>

      
    </>
  );
}

export default Header;
