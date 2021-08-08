import Head from "next/head";
import ReactIcon from "../components/frameworks/ReactIcon";
import WordpressIcon from "../components/frameworks/WordpressIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import SassIcon from "../components/frameworks/SassIcon";
import NextIcon from "../components/frameworks/NextIcon";
import FlureeIcon from "../components/frameworks/FlureeIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";

export default function about() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2 px-10 lg:px-96 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>About - Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="grid grid-cols-1 w-auto flex-1 mt-10 lg:mt-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            about me
          </h1>
          <p className="text-lg mb-5 text-gray-600 dark:text-white font-sans max-w-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            libero lacus, laoreet eget nisl non, lobortis vehicula libero.
            Maecenas ultrices turpis ac dictum congue. Integer a lobortis
            lectus.
          </p>
          <div className="divide-y mb-5">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            juan matus
          </h1>
          <p className="text-lg mb-5 text-gray-600 dark:text-white font-sans max-w-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            libero lacus, laoreet eget nisl non, lobortis vehicula libero.
            Maecenas ultrices turpis ac dictum congue. Integer a lobortis
            lectus.{" "}
          </p>
          <h1 className="text-3xl font-bold mb-3 dark:text-white font-sans">
            4+ <a className="text-lg">years of experience</a>
          </h1>
          <h1 className="text-3xl font-bold mb-3 dark:text-white font-sans">
            3+ <a className="text-lg">failed startups</a>
          </h1>
          <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            8+ <a className="text-lg">company worked</a>
          </h1>

          <div className="divide-y mb-5">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            what i master
          </h1>
          <div className="grid md:grid-cols-2 max-w-max gap-x-16">
            <div className="inline-flex items-center space-x-3">
              <ReactIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                reactjs
              </h3>
            </div>

            <div className="inline-flex items-center space-x-3">
              <NextIcon styles="flex-1 w-10 fill-current text-purple-138  dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                nextjs
              </h3>
            </div>

            <div className="inline-flex items-center space-x-3">
              <TypeScriptIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                typescript
              </h3>
            </div>

            <div className="inline-flex items-center space-x-3">
              <WordpressIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                wordpress
              </h3>
            </div>

            <div className="inline-flex items-center space-x-3">
              <SassIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                sass
              </h3>
            </div>
            <div className="inline-flex items-center space-x-3">
              <TailwindIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                tailwindcss
              </h3>
            </div>

            <div className="inline-flex items-center space-x-3">
              <FlureeIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                fluree
              </h3>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 ">
        <a
          className="flex items-center justify-center dark:text-white"
          href="/about"
          target="_blank"
        >
          Powered by
          <img src="/favicon.svg" className="w-7 mx-3" />
        </a>
      </footer>
    </div>
  );
}
