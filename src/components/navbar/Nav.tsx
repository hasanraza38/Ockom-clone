import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <>
      <div className="navbar  bg-transparent border-b border-zinc-500">
        <div className="navbar-start flex justify-evenly  py-4 px-20">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" uppercase menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>product +</a>
              </li>
              <li>
                <a>solution +</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <Image
              src="https://cdn.prod.website-files.com/61d560b08f65d447a4b35c16/61d560b08f65d41e22b35c2f_new-logo.svg"
              width={90}
              height={50}
              alt="nav logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu uppercase text-xs font-semibold menu-horizontal px-1">
            <li>
              <a>product +</a>
            </li>
            <li>
              <a>solution +</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
