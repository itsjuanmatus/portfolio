import Head from "next/head";
import ReactIcon from "../components/frameworks/ReactIcon";
import WordpressIcon from "../components/frameworks/WordpressIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import SassIcon from "../components/frameworks/SassIcon";
import NextIcon from "../components/frameworks/NextIcon";
import FlureeIcon from "../components/frameworks/FlureeIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";
import JavaScriptIcon from "../components/frameworks/JavaScriptIcon";
import CssIcon from "../components/frameworks/CssIcon";
import { motion } from "framer-motion";

export default function about() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2 px-10 lg:px-96 bg-white dark:bg-gray-background overflow-x-hidden">
      <Head>
        <title>About - Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="grid grid-cols-1 w-auto flex-1 mt-10 lg:mt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
              About me
            </h1>
            <p className="text-lg mb-5 text-gray-600 dark:text-white font-sans max-w-auto">
              I am a highly motivated Full-Stack developer with a goal-driven
              work ethic. Now working with Startups focused on Semantic Web
              Technologies and Natural Language Processing, I see myself going
              towards the world of AI. I am an active student at Codecademy,
              keeping myself up to date with the latest and best technologies in
              my field.
            </p>

            <p className="text-lg mb-5 text-gray-600 dark:text-white font-sans max-w-auto">
              In my free time? I am a content creator on YouTube; I like sharing
              what I learn with others, from how my programming workflow works
              to the meaning of loneliness.
            </p>
          </motion.div>
          <div className="divide-y mb-5">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
              Juan Matus
            </h1>
            <p className="text-lg mb-5 text-gray-600 dark:text-white font-sans max-w-auto">
              Since High School, I've had the opportunity to develop websites
              and mobile applications for many companies as a freelancer. Also,
              I've tried to create many businesses, and although I have not
              quite succeeded in it, I'm proud of myself for trying. I have
              learned a lot and got the opportunity to meet incredible and
              talented people along the way.
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
          </motion.div>
          <div className="divide-y mb-5">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="text-3xl font-bold mb-5 dark:text-white font-sans">
            What I master
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-max gap-x-16">
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
              <JavaScriptIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                javascript
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

            <div className="inline-flex items-center space-x-3">
              <CssIcon styles="flex-1 w-10 fill-current text-purple-138 dark:text-gray-137 p-1" />
              <h3 className="flex-1 text-xl font-thin text-purple-138 dark:text-white font-sans">
                css
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
