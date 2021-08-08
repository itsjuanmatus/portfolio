import React, { Fragment } from "react";
import Head from "next/head";
import ReactIcon from "../components/frameworks/ReactIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";
import ProjectCard from "../components/ProjectCard";
import NextIcon from "../components/frameworks/NextIcon";
import Cards from "../components/CardsInfo";

export default function portfolio() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2  lg:px-96 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>Portfolio - Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="grid md:grid-cols-2 min-w-max mt-10 lg:mt-24 max-w-2xl m-auto">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-2 dark:text-white font-sans">
            Portfolio
          </h1>
          <div className="max-w-md inline-flex items-center space-x-4 mb-5">
            <p className="text-lg text-gray-600 dark:text-white font-sans ">
              This site was made with{" "}
            </p>
            <ReactIcon styles="fill-current dark:text-white w-7" />
            <NextIcon styles="fill-current dark:text-white w-7" />
            <TypeScriptIcon styles="fill-current dark:text-white w-7" />
            <TailwindIcon styles="fill-current dark:text-white w-7" />
          </div>
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
