"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps extends React.ComponentPropsWithoutRef<typeof motion.section> {
  children: ReactNode;
  innerRef?: React.Ref<HTMLElement>;
}

export default function AnimatedSection({ children, innerRef, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      ref={innerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}