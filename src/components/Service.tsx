"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import TitleText from "./TitleText";
import styles from "@/constants/styles";
import Image from "next/image";

interface ServiceProps {
    service: {
        id: number;
        text: string;
        title: string;
        img: string;
        variant1: {
            hidden: { x: number; y: number; opacity: number; };
            show: { 
                x: number; 
                y: number; 
                opacity: number; 
                transition: { 
                    type: string; 
                    delay: number; 
                    duration: number; 
                    ease: string; 
                }; 
            };
        };
        variant2: {
            hidden: { x: number; y: number; opacity: number; };
            show: { 
                x: number; 
                y: number; 
                opacity: number; 
                transition: { 
                    type: string; 
                    delay: number; 
                    duration: number; 
                    ease: string; 
                }; 
            };
        };
    }
}

const Service = ({ service }: ServiceProps) => {
  return (
    <section className="">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} grid grid-cols-1 mt-10 mx-auto gap-5`}
      >
        <TitleText>
            {service.title}
        </TitleText>
        <motion.div
          variants={service.variant1}
          className="flex justify-center items-center flex-col"
        >
          <p className="font-normal text-sm lg:text-lg text-slate-400 text-center leading-6 w-full max-w-7xl mb-5">
            {service.text}
          </p>
          <div className="w-11/12 lg:w-10/12">
            <Image
              src={service.img}
              className="w-full h-full object-contain"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;