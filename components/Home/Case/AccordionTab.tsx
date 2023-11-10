"use client";

import { RightOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";

type AccordionTabProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  text: string;
};

export default function AccordionTab({
  open,
  setOpen,
  title,
  text,
}: AccordionTabProps) {
  return (
    <motion.div
      className={`bg-[#383840] py-[42px] w-full mx-auto rounded-[10px] px-11 overflow-hidden max-sm:px-6`}
      animate={{ height: open ? "266px" : "130px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex items-center justify-between ${
          open ? "max-sm:mb-[10px] mb-[30px]" : "mb-0 gap-12"
        }`}
      >
        <div>
          {open && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ duration: open ? 1 : 0 }}
              className="parag text-primary_a mb-2.5"
            >
              Branding / Marketing
            </motion.p>
          )}
          <h5 className="h5-title text-white max-sm:text-xl">{title}</h5>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`min-w-[50px] min-h-[50px] ${
            open
              ? "bg-primary_b text-white self-start"
              : "bg-secondary_a text-[#888]"
          }  rounded-full dur-200 `}
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
        transition={{ duration: open ? 1 : 0 }}
        className="parag text-[#D0D0D0] max-sm:text-base"
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
