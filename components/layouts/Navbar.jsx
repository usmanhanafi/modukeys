import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const imgLogo = "/logo-line.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white z-100 w-full">
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
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
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#customize-modukeys"
              >
                <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">Modukeys By you</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#blog"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
