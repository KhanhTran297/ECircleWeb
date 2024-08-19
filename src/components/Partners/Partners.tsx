import React from "react";
import img1 from "../../assets/brand/br-1.png";
import img2 from "../../assets/brand/br-2.png";
import img3 from "../../assets/brand/br-3.png";
import img4 from "../../assets/brand/br-4.png";
import img5 from "../../assets/brand/br-5.png";
import { motion } from "framer-motion";
const Partners = () => {
  return (
    <motion.div
      initial={{ scale: 1.25, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.75, delay: 0.15, ease: "easeInOut" },
      }}
      className="hidden py-8 mt-24 bg-gray-200 md:block dark:bg-white/10 "
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 opacity-50 place-items-center">
          <img src={img1} alt="" className=" w-[80px] dark:invert" />
          <img src={img2} alt="" className="w-[80px] dark:invert" />
          <img src={img3} alt="" className="w-[80px] dark:invert" />
          <img src={img4} alt="" className="w-[80px] dark:invert" />
          <img src={img5} alt="" className="w-[80px] dark:invert" />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
