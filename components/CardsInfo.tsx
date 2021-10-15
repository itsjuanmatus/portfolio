import React, { Fragment } from "react";
import ReactIcon from "./frameworks/ReactIcon";
import TypeScriptIcon from "./frameworks/TypeScriptIcon";
import TailwindIcon from "./frameworks/TailwindIcon";
import ProjectCard from "./ProjectCard";
import NextIcon from "./frameworks/NextIcon";
import SquarespaceIcon from "./frameworks/SquarespaceIcon";
import WordpressIcon from "./frameworks/WordpressIcon";
import CssIcon from "./frameworks/CssIcon";
import PhpIcon from "./frameworks/PhpIcon";

const Cards = [
  {
    title: "MD Furniture",
    imageSource: "/images/companies/md-furniture.png",
    link: "https://md-furniture.netlify.app/",
    icons: (
      <Fragment>
        <ReactIcon styles="fill-current dark:text-white w-10" />
        <NextIcon styles="fill-current dark:text-white w-10" />
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
        <SquarespaceIcon styles="fill-current dark:text-white w-10" />
        <CssIcon styles="fill-current dark:text-white w-10" />
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
        <SquarespaceIcon styles="fill-current dark:text-white w-10" />
        <CssIcon styles="fill-current dark:text-white w-9" />
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
        <WordpressIcon styles="fill-current dark:text-white w-10" />
        <PhpIcon styles="fill-current dark:text-white w-10" />

        <CssIcon styles="fill-current dark:text-white w-9" />
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
        <WordpressIcon styles="fill-current dark:text-white w-10" />
        <PhpIcon styles="fill-current dark:text-white w-10" />

        <CssIcon styles="fill-current dark:text-white w-9" />
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
        <WordpressIcon styles="fill-current dark:text-white w-10" />
      </Fragment>
    ),
  },
  {
    title: "niudot",
    description: "Produced by niudot",
    companyLink: "https://niudot.com/",
    imageSource: "/images/companies/niudot.png",
    link: "https://niudot.com",
    icons: (
      <Fragment>
        <WordpressIcon styles="fill-current dark:text-white w-10" />
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
        <SquarespaceIcon styles="fill-current dark:text-white w-10" />
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
        <SquarespaceIcon styles="fill-current dark:text-white w-10" />
      </Fragment>
    ),
  },
];

export default Cards;
