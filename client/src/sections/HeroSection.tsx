"use client";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
  const specialFeatures = [
    "Design-free workflow",
    "Instant generation",
    "Click-optimized templates",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="absolute top-30 -z-10 left-1/4 size-72 bg-orange-500 blur-[300px]"></div>
      <motion.a
        href="https://prebuiltui.com?utm_source=pixels"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-orange-100 bg-orange-200/15"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        <span className="bg-orange-600 text-white text-xs px-3.5 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-1">
          <span>Generate your first thumbnail for free</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-0.5 transition duration-300"
          />
        </p>
      </motion.a>
      <motion.h1
        className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        Instant Thumbnails for Videos by{" "}
        <span className="move-gradient px-3 rounded-xl text-nowrap">
          Gen AI
        </span>
      </motion.h1>
      <motion.p
        className="text-base text-center text-slate-200 max-w-lg mt-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        Save time on design and generate click-worthy thumbnails instantly using
        advanced AI.
      </motion.p>
      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-7 h-11">
          Get started
        </button>
        <button className="flex items-center gap-2 border border-orange-900 hover:bg-orange-950/50 transition rounded-full px-6 h-11">
          <VideoIcon strokeWidth={1} />
          <span>Watch demo</span>
        </button>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
        {specialFeatures.map((feature, index) => (
          <motion.p
            className="flex items-center gap-2"
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <CheckIcon className="size-5 text-orange-600" />
            <span className="text-slate-400">{feature}</span>
          </motion.p>
        ))}
      </div>
      <TiltedImage />
    </div>
  );
}
