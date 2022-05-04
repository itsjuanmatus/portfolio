import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { workHistory } from '../utils/work';

function BulletTriangle({ text }) {
  return (
    <div className="inline-flex items-start space-x-4 w-full min-w-max">
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.49519 3.75L17.705 10.1756L6.45499 16.6708L6.49519 3.75Z"
          fill="#3A72E4"
        />
      </svg>
      <p className="dark:text-gray-400 max-w-xs md:max-w-max">{text}</p>
    </div>
  );
}
export default function work() {
  const router = useRouter();

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    console.log(formData);

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    router.push({ pathname: '/' });
  }

  return (
    <motion.div
      className="flex flex-col flex-wrap min-h-screen py-2 px-5 lg:ml-[1/6] lg:w-full bg-white dark:bg-gray-background overflow-x-hidden"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
    >
      <Head>
        <title>Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex flex-col px-5 lg:px-0 lg:items-start w-[5/6] mt-10 ">
        <div className="max-w-xs md:max-w-xl">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-5 dark:text-white font-sans">
              Where I've worked{' '}
            </h1>
            <div className="grid gap-y-7">
              {workHistory &&
                workHistory
                  .slice(0)
                  .reverse()
                  .map((work, idx) => (
                    <div key={idx}>
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-blue-137">
                          {work.company}
                        </h3>
                        <h3 className="text-lg text-blue-137">{work.title}</h3>
                        <h3 className="text-lg text-gray-500 ">
                          {work.startDate} - {work.endDate}
                        </h3>
                      </div>
                      <p className="text-md text-gray-500 mb-3">
                        {work.description}
                      </p>{' '}
                      {work.highlights &&
                        work.highlights.map((highlight, idx) => (
                          <BulletTriangle key={idx} text={highlight} />
                        ))}
                    </div>
                  ))}
            </div>
          </motion.div>
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
    </motion.div>
  );
}
