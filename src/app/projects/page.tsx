"use client";

import { Projects } from "@/components/Projects";
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center bg-amber-50 dark:bg-gray-900 justify-center min-h-screen py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          My Projects
        </h1>
      </motion.div>
      <Projects />
    </div>
  );
}

