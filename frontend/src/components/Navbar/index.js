"use client";

import { adminNavOptions, navOptions } from "@/utils";
import { Fragment } from "react";

const isAdminView = false;
const isAuthUser = true;
const user = { role: "admin" };

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={"items-center justify-between w-full md:flex md:w-auto"}
      id="nav-items"
    >
      <ul
        className={
          "flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-zinc-900 "
        }
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li className="navbar-products" key={item.id}>
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li className="navbar-products" key={item.id}>
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-zinc-900 fixed w-full z-20 top-0 left-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-100">
              Lady&Tramp
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className={"button-navbar"}>Account</button>
                <button className={"button-navbar"}>Favorites</button>
              </Fragment>
            ) : null}
            {user?.role === "admin" ? (
              isAdminView ? (
                <button className={"button-navbar"}>Client View</button>
              ) : (
                <button className={"button-navbar"}>Admin View</button>
              )
            ) : null}
            {isAuthUser ? (
              <button className={"button-navbar"}>Logout</button>
            ) : (
              <button className={"button-navbar"}>Login</button>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavItems />
        </div>
      </nav>
    </>
  );
}