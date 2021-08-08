import React from "react";
import ReactIcon from "../components/frameworks/ReactIcon";
import TypeScriptIcon from "../components/frameworks/TypeScriptIcon";
import TailwindIcon from "../components/frameworks/TailwindIcon";

interface Props {
  imageSource: string;
  title: string;
  icons: JSX.Element;
  imageAlt?: string;
  imageStyles?: string;
  description?: string;
  link?: string;
  companyLink?: string;
}

export default function ProjectCard({
  imageSource,
  imageAlt,
  imageStyles,
  title,
  description,
  icons,
  link,
  companyLink
}: Props) {
  return (
    <div className="bg-white dark:bg-transparent dark:border-purple-138 max-w-xs xl:max-w-md max-h-full border border-gray-137 rounded-lg pb-6 m-2 md:m-4">
      <a href={link} target="_blank">
        <img
          src={imageSource}
          alt={imageAlt}
          className={`p-4 pb-6 w-full block` + imageStyles}
        />
      </a>
      <a href={link} target="_blank">
        <h3 className="px-4 font-bold dark:text-white">{title}</h3>
      </a>
      <a href={companyLink} target="_blank">
        <p className="px-4 text-gray-700 dark:text-gray-400 mt-2">
          {description}
        </p>
      </a>

      <div className="flex items-center px-4 pt-2 space-x-4">{icons}</div>
    </div>
  );
}
