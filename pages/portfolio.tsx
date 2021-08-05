import React, { Fragment } from "react";
import Head from "next/head";
import ReactIcon from "../components/frameworks/ReactIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";
import ProjectCard from "../components/ProjectCard";

export default function portfolio() {
  const Cards = [
    {
      title: "MD Furniture",
      imageSource: "/images/companies/md-furniture.png",
      link: "https://md-furniture.netlify.app/",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Perignosia",
      imageSource: "/images/companies/perignosia.png",
      link: "https://perignosia.io",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Fundación Costa Rica",
      description: "Produced by niudot",
      companyLink: "https://niudot.com/",
      imageSource: "/images/companies/fundacioncostarica.png",
      link: "https://fundacioncostarica.org/",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Webster Academy",
      description: "Produced by niudot",
      companyLink: "https://niudot.com/",
      imageSource: "/images/companies/webster-academy.png",
      link: "https://webstercostarica.com/",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Top Monkey Media",
      description: "Produced by TMM",
      companyLink: "https://topmonkeymedia.com/",
      imageSource: "/images/companies/topmonkeymedia.png",
      link: "https://topmonkeymedia.com/",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Farmacia Centroamericana",
      description: "Produced by TMM",
      companyLink: "https://topmonkeymedia.com/",
      imageSource: "/images/companies/farmaciacentroamericana.png",
      link: "https://farmacentroamericana.com/",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
          <TypeScriptIcon styles="fill-current dark:text-white w-10" />
          <TailwindIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "SIM Nicaragua",
      description: "Produced by TMM",
      companyLink: "https://topmonkeymedia.com/",
      imageSource: "/images/companies/simnicaragua.png",
      link: "https://quenca.com",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "niudot",
      description: "Produced by niudot",
      companyLink: "https://niudot.com/",
      imageSource: "/images/companies/quenca.png",
      link: "https://niudot.com",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Quenca",
      description: "Produced by niudot",
      companyLink: "https://niudot.com/",
      imageSource: "/images/companies/quenca.png",
      link: "https://quenca.com",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
    {
      title: "Ecotel",
      description: "Produced by niudot",
      companyLink: "https://niudot.com/",
      imageSource: "/images/companies/ecotel.png",
      link: "https://ecotelmanagua.com",
      icons: (
        <Fragment>
          <ReactIcon styles="fill-current dark:text-white w-10" />
        </Fragment>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 min-h-screen py-2 px-80 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>Portfolio - Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="grid lg:grid-cols-2 min-w-max mt-24 max-w-2xl m-auto">
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
