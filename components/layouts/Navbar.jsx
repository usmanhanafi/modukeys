import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Report } from "notiflix";
import { useState } from "react";
const imgLogo = "/logo-line.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const onHandleCart = () => {
    Report.info(
      "Coming Soon",
      "Shopping Cart Feature Under Development",
      "Okay"
    );
  };
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white z-100 w-full fixed z-20 bg-opacity-80 backdrop-blur">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            href="/"
          >
            <Image src={imgLogo} priority width="120" height="32" alt="logo" />
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon
              icon={navbarOpen ? "humbleicons:times" : "fa:bars"}
              width="24"
              height="24"
              color="black"
            />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:items-center lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="/shop"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">Shop Now</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="/modukeys-by-you"
              >
                <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">Modukeys By you</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#blog"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">Blog</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <button className="p-2" onClick={() => window.alert("sd")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
