"use client";

import { ReactNode } from "react";
import { textVariant2 } from "@/constants/motion";
import { motion } from "framer-motion";

interface TitleTextProps {
    children: ReactNode;
    textStyles?: string;
}

const TitleText = ({ children, textStyles }: TitleTextProps) => {
  return (
    <motion.h2 
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-2 text-blue-500 font-bold md:text-[64px] text-[36px] text-center ${textStyles}`}
    >
        {children}
    </motion.h2>
  )
}

export default TitleText