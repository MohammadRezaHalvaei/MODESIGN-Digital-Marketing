"use client";

import { RightOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

type AccordionTabProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};

export default function AccordionTab({
  open,
  setOpen,
  title,
}: AccordionTabProps) {
  const screens = useBreakpoint();

  return (
    <motion.div
      className={`py-7 w-full mx-auto rounded-[10px] px-[30px] overflow-hidden border border-[#DCDCDC] relative max-md:px-4`}
      animate={{
        height: open
          ? `${screens.xs ? "230px" : "200px"}`
          : `${screens.xs ? "110px" : "100px"}`,
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex items-center justify-between ${
          open ? "mb-[20px]" : "mb-0 gap-12"
        }`}
      >
        <h5 className="h5-title max-md:text-lg">{title}</h5>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`min-w-[50px] min-h-[50px] flex items-center justify-center ${
            open
              ? "bg-primary_b text-white self-start"
              : "bg-secondary_a text-[#888]"
          }  rounded-full dur-200`}
        >
          {open ? (
            <DownOutlined style={{ fontSize: "18px" }} />
          ) : (
            <RightOutlined style={{ fontSize: "18px" }} />
          )}
        </button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: open ? 1 : 0, delay: open ? 0.1 : 0 }}
        className="parag max-w-[790px] max-sm:text-base"
      >
        Lorem Ipsum has been the industry&apos;s standard from dummy text ever
        since the unknown printer to galley of type and make a type specimen
        book.
      </motion.p>
      <div
        className={`bg-gradient-to-br from-[#E9F7FF] to-[#FFDBD4] via-[#FFF3CA] dur-400 
        opacity-0 ${
          open ? "opacity-100" : ""
        } absolute top-0 right-0 left-0 bottom-0 -z-10`}
      />
    </motion.div>
  );
}
