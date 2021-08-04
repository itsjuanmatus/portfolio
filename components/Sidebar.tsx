import { useRouter } from "next/router";
import Link from "next/link";
import useDarkMode from "./useDarkMode";

export default function Sidebar() {
  const router = useRouter();
  const [colorTheme, setTheme]: any = useDarkMode();
  return (
    <>
      <aside className="hidden md:block justify-center fixed bg-white dark:bg-purple-137 h-screen w-64 pt-10">
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
          <Link href="/services">
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == "/services"
                  ? "visited:text-blue-137 dark:visited:text-blue-137"
                  : ""
              }`}
            >
              Services
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
    </>
  );
}
