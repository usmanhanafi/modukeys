import Image from "next/image";
import Link from "next/link";
import { Report } from "notiflix";
import { useEffect, useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
const imgLogo = "/logo-line.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const onHandleCart = () => {
    Report.info(
      "Coming Soon",
      "Shopping Cart Feature Under Development",
      "Okay",
      {
        borderRadius: 0,
      }
    );
  };
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white z-100 w-full fixed z-20 bg-opacity-80 backdrop-blur">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 sm:mx-auto sm:flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto static">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            href="/"
          >
            <Image src={imgLogo} priority width="120" height="32" alt="logo" />
          </Link>
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 18L18 6m0 12L6 6"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="black"
                  d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                />
              </svg>
            </button>
          )}
        </div>
        <div
          className={
            "lg:flex items-center w-100 md:w-auto" +
            (navbarOpen ? " flex justify-center " : " hidden")
          }
        >
          <ul className="flex flex-col md:items-center lg:flex-row list-none lg:ml-auto w-full md:w-auto">
            <li className="hover:opacity-80 py-2 md:py-0">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="/shop"
              >
                <span>Shop Now</span>
              </Link>
            </li>
            <li className="hover:opacity-80 py-2 md:py-0">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="/modukeys-by-you"
              >
                <span>Modukeys By you</span>
              </Link>
            </li>
            <li className="hover:opacity-80">
              <button
                onClick={() => onHandleCart()}
                className="p-2 flex gap-1 text-sm font-bold text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="black"
                    d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.20.61-.20.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
                  />
                </svg>
                <p>Cart</p>
              </button>
            </li>
            <li className="hover:opacity-80 ml-0 md:ml-5 mb-4 mt-8 md:mb-0 md:mt-0">
              <ButtonPrimary className="w-full" onClick={() => onHandleCart()}>
                Sign In
              </ButtonPrimary>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
