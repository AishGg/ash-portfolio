"use client";

import { motion } from "motion/react";

export function Home() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="px-2 py-4">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center space-x-2 text-2xl font-bold text-slate-700 md:text-3xl lg:text-5xl dark:text-slate-300">
          {"I'm Ashish Garg"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-2 text-center text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          I'm a software developer who loves building innovative solutions 
          and bringing ideas to life through code.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="https://github.com/AishGg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center"
          >
            Github
          </a>
          <a 
            href="https://www.linkedin.com/in/ash-garg/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
          >
            Linkedin
          </a>
        </motion.div> 
      </div>
    </div>
  );
}

