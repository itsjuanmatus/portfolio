import { useRouter } from "next/router";
import Link from "next/link";
import useDarkMode from "./useDarkMode";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Sidebar() {
  const router = useRouter();
  const [colorTheme, setTheme]: any = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <aside className="hidden lg:block justify-center fixed bg-white dark:bg-purple-137 h-screen w-64 pt-10">
        <Link href="/">
          <img src="/favicon.svg" className="m-auto mb-24" />
        </Link>
        <nav className="text-white text-base font-semibold pt-3 grid justify-items-center">
          <Link href="/">
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == "/"
                  ? "visited:text-blue-137 dark:visited:text-blue-137"
                  : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == "/about"
                  ? "visited:text-blue-137 dark:visited:text-blue-137"
                  : ""
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == "/portfolio"
                  ? "visited:text-blue-137 dark:visited:text-blue-137"
                  : ""
              }`}
            >
              Portfolio
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == "/contact"
                  ? "visited:text-blue-137 dark:visited:text-blue-137"
                  : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </nav>

        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 upgrade-btn bottom-0  text-white flex items-center justify-center py-32 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src="/images/moon.svg"
            className="w-10 upgrade-btn bottom-0  text-black flex items-center justify-center py-32 m-auto"
          />
        )}
      </aside>

      {/** Mobile Nav Bar */}

      <div className="flex items-center justify-between lg:hidden w-full dark:bg-purple-137 px-4 pt-2">
        <div className="inline-flex">
          <img className="h-20 w-20 p-4" src="/favicon.svg" alt="logo" />
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 upgrade-btn bottom-0  text-white flex items-center justify-center m-auto"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <img
              onClick={() => setTheme("dark")}
              src="/images/moon.svg"
              className="w-7 upgrade-btn bottom-0  text-black flex items-center justify-center m-auto"
            />
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="stroke-current stroke-3 fill-current text-purple-137 dark:text-gray-137"
              width="36"
              height="24"
              viewBox="0 0 36 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="2.5" y1="1.5" x2="21.5" y2="1.5" />
              <line x1="1.5" y1="11.5" x2="34.5" y2="11.5" />
              <line x1="10.5" y1="22.5" x2="29.5" y2="22.5" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 stroke-current stroke-3 fill-current text-purple-137 dark:text-gray-137"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-purple-137"
            >
              <Link href="/">
                <a  onClick={() => setIsOpen(!isOpen)} className="text-purple-137 dark:text-white font-semibold block px-3 py-2 rounded-md text-base">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a onClick={() => setIsOpen(!isOpen)}  className="text-purple-137 dark:text-white font-semibold block px-3 py-2 rounded-md text-base">
                  About
                </a>
              </Link>
              <Link href="/portfolio">
                <a onClick={() => setIsOpen(!isOpen)} className="text-purple-137 dark:text-white font-semibold block px-3 py-2 rounded-md text-base">
                  Portfolio
                </a>
              </Link>
              <Link href="/contact">
                <a onClick={() => setIsOpen(!isOpen)} className="text-purple-137 dark:text-white font-semibold block px-3 py-2 rounded-md text-base">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
