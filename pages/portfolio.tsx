import React, { Fragment } from "react";
import Head from "next/head";
import ReactIcon from "../components/frameworks/ReactIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";
import ProjectCard from "../components/ProjectCard";
import NextIcon from "../components/frameworks/NextIcon";
import Cards from "../components/CardsInfo";
import { motion } from "framer-motion";

export default function portfolio() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2  lg:px-96 bg-white dark:bg-gray-background overflow-x-hidden">
      <Head>
        <title>Portfolio - Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 min-w-max mt-10 lg:mt-24 max-w-2xl m-auto">
        <div className="col-span-1 md:col-span-2">
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 10 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
          <h1 className="text-4xl font-bold md:mb-2 dark:text-white font-sans">
            Portfolio
          </h1>
          <div className="inline-flex items-center space-x-4 mb-5 max-w-md">
            <p className="text-md text-gray-600 dark:text-white font-sans ">
              This site was made with{" "}
            </p>
            
            <ReactIcon styles="fill-current dark:text-white w-5 md:w-7" />
            <NextIcon styles="fill-current dark:text-white w-5 md:w-7" />
            <TypeScriptIcon styles="fill-current dark:text-white w-5 md:w-7" />
            <TailwindIcon styles="fill-current dark:text-white w-5 md:w-7" />
          </div>
          </motion.div>
        </div>
        {Cards.map((card) => {
          const { title, imageSource, link, icons, description, companyLink } =
            card;
          return (
            <ProjectCard
              key={title}
              imageSource={imageSource}
              title={title}
              link={link}
              icons={icons}
              description={description}
              companyLink={companyLink}
            />
          );
        })}
      </main>

      <footer className="flex items-center justify-center w-full h-24 self-end">
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
