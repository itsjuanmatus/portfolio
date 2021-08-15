import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen py-2 px-10 lg:px-96 bg-white dark:bg-purple-137 overflow-x-hidden">
      <Head>
        <title>Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Juan Matus" />
        <meta property="og:description" content="Frontend Developer" />
        <meta name="og:image" content={"./public/images/favicon.svg"} />
      </Head>

      <main className="grid grid-cols-1 mb-16 md:grid-cols-2 min-w-full flex-1 mt-5 md:mt-24 md:gap-x-10 lg:gap-x-36">
        <div className="min-w-full lg:max-w-lg lg:w-72">
          <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <h1 className="text-6xl font-bold mb-5 dark:text-white font-sans">
              Hi there!
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-5 dark:text-white font-sans">
              Thank you for being here!
            </h3>
            <p className="text-xl mb-5 dark:text-white font-sans">
              I’m a <a className="font-semibold">Software Developer</a> and{" "}
              <a className="font-semibold">Youtube Content Creator.</a>
            </p>
          </motion.div>
          <img src="/images/line.svg" className="mb-5" />

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <p className="text-xl mb-5 dark:text-white font-sans">
              Here you’ll find many of the work I’ve done and projects I’ve
              collaborated with.
            </p>
          </motion.div>
          <motion.div whileHover={{ x: 350 }} transition={{ duration: 1 }}>
            <img src="/images/circle.svg" className="mb-5" />
          </motion.div>

          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <p className="text-xl mb-10 dark:text-white font-sans">
              If you like what I do, feel free to join our community:
            </p>
          </motion.div>
          <a
            href="https://www.youtube.com/c/JuanMatus/videos"
            target="_blank"
            className="button p-4 rounded-md bg-blue-137 text-white font-semibold"
          >
            Subscribe Here
          </a>
        </div>
        <div>
          <img
            src="/images/face.png"
            className="hidden md:block md:max-w-sm lg:max-w-lg"
          />
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
