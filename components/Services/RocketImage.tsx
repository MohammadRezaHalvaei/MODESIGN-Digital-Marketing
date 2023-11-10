"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import rocket from "@/public/images/services/rocket.png";

export default function RocketImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 100 }}
      whileInView={{ opacity: 100, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="absolute right-[12%] -top-10 z-20 max-lg:-top-0 max-lg:right-10 max-md:top-[40%] max-md:right-0 max-sm:hidden"
    >
      <Image
        src={rocket}
        alt="Rocket"
        className="max-xl:w-[350px] max-lg:w-[300px] max-md:w-[100px]"
      />
    </motion.div>
  );
}
