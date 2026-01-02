"use client";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { motion } from "motion/react";
import LaserFlow from "../components/LaserFlow";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();

  const specialFeatures = [
    "Design-free workflow",
    "Instant generation",
    "Click-optimized templates",
  ];

  return (
    <>
      <div
        className="relative overflow-hidden bg-[#060010]
                 min-h-screen md:min-h-[140vh]"
      >
        {/* Laser background (hidden on mobile) */}
        <div className="hidden md:block">
          <LaserFlow laserColor="#ffab66" />
        </div>

        {/* Center card */}
        <div
          className="
          relative md:absolute
          md:top-[69%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
          w-full md:w-[86%]
          min-h-screen md:min-h-[65%]
          bg-[#060010]
          md:border-2 md:border-[#ffab66]
          md:rounded-[20px]
          flex items-center justify-center
          px-4 md:px-0
        "
        >
          <div
            className="relative flex flex-col gap-4 items-center justify-center
                        px-4 md:px-16 lg:px-24 xl:px-32
                        text-center md:text-center"
          >
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-orange-500 blur-[300px]" />

            <motion.a
              href="#"
              className="group flex items-center gap-2 rounded-full p-1 pr-3
                       mt-16 md:mt-20
                       text-orange-100 bg-orange-200/15"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 320,
                damping: 70,
              }}
            >
              <span className="bg-orange-600 text-white text-xs px-3.5 py-1 rounded-full">
                NEW
              </span>
              <p className="flex items-center gap-1 text-xs md:text-base">
                <span>Generate your first thumbnail for free</span>
                <ChevronRightIcon size={16} />
              </p>
            </motion.a>

            <motion.h1 className="text-3xl md:text-6xl font-medium max-w-2xl leading-tight">
              Instant Thumbnails for Videos by{" "}
              <span className="move-gradient px-3 md:rounded-xl rounded-md">
                Gen AI
              </span>
            </motion.h1>

            <motion.p className="text-lg md:text-base text-slate-200 max-w-lg mt-4 md:mt-6">
              Save time on design and generate click-worthy thumbnails instantly
              using advanced AI.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <button
                onClick={() => navigate("/generate")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-7 h-11 w-full sm:w-auto"
              >
                Generate now
              </button>
              <button className="flex items-center gap-2 border border-orange-900 hover:bg-orange-950 rounded-full px-6 h-11 w-full sm:w-auto justify-center">
                <VideoIcon strokeWidth={1} />
                <span>See how it works</span>
              </button>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-14 mt-10 md:mt-12">
              {specialFeatures.map((feature, index) => (
                <motion.p key={index} className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-orange-600" />
                  <span className="text-slate-400 text-sm md:text-base">
                    {feature}
                  </span>
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
