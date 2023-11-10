"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function VerticalAnimation({
  children,
  delay = 0,
  className,
  style,
  yAxis = 100,
  ease = "easeIn",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  yAxis?: number;
  ease?: string | number[];
}) {
  return (
    <motion.div
      initial={{ y: yAxis, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: ease,
      }}
      viewport={{ once: true }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
