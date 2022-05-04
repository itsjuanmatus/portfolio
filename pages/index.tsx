import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <motion.div
      className="flex flex-col pt-10 md:pt-0 md:justify-center h-screen lg:ml-[1/6] lg:w-full bg-white dark:bg-gray-background overflow-x-hidden "
      exit={{
        opacity: 0,
      }}
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
        <meta property="og:title" content="Juan Matus" />
        <meta property="og:description" content="Frontend Developer" />
        <meta
          name="og:image"
          content="..public/images/logo.png"
          key="ogimage"
        />
      </Head>

      <div className="w-full md:max-w-5/6 flex flex-col md:flex-row px-8">
        <div className="flex flex-col gap-y-4 dark:text-white">
          <h1 className="text-7xl font-bold">Hi there!</h1>
          <h3 className="text-2xl font-bold -mt-2.5">
            Thank you for being here!
          </h3>
          <p className="w-3/4">
            I'm a <a className="font-semibold">Full Stack Web Developer</a> and{' '}
            <a className="font-semibold">Youtube Content Creator.</a>
          </p>
          <img src="/images/line.svg" className="mb-5 w-7" />
          <p className="w-3/4">
            Here you'll find many of the work I've done and projects I've
            collaborated with.{' '}
          </p>
          <motion.div whileHover={{ x: 350 }} transition={{ duration: 1 }}>
            <img src="/images/circle.svg" />
          </motion.div>
          <p>If you like what I do, feel free to join our community:</p>
          <motion.a
            href="https://www.youtube.com/c/JuanMatus/videos"
            target="_blank"
            className="button py-3 px-5 rounded-md bg-blue-137 text-white font-semibold max-w-max"
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
                ease: 'easeInOut',
              },
            }}
          >
            Subscribe Here
          </motion.a>
        </div>
        <div className="hidden md:flex relative h-[70vh] w-[70vh]">
          <Image
            src="/images/face.png"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
