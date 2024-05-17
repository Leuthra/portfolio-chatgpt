"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type FadeInLeftProps = {
  children: React.ReactNode;
  className?: string; // Properti opsional untuk kelas tambahan
};

const FadeInLeft: React.FC<FadeInLeftProps> = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -50, opacity: 0 }); // Atur kembali ke posisi awal saat keluar dari viewport
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={controls}
      exit={{ x: -50, opacity: 0 }} // Atur posisi awal saat keluar dari viewport
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className} // Menggunakan properti className jika diberikan, jika tidak, menggunakan nilai default ''
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
