import React from "react";
import Button from "../../shared/Button";
import { motion } from "framer-motion";
type productcardtype = {
  id: number;
  img: string;
  title: string;
  price: string;
  aosDelay: number;
};
interface ProductCardProps {
  data: Array<productcardtype>;
}
const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="mb-10 ">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {data.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: item.aosDelay,
                ease: "easeInOut",
              },
            }}
            className="group"
            key={index}
          >
            <div className="relative ">
              <img
                src={item.img}
                alt=""
                className=" h-[180px] w-[260px] object-cover rounded-md"
              />
              <div className="absolute items-center justify-center hidden w-full h-full text-center duration-200 -translate-x-1/2 -translate-y-1/2 group-hover:flex left-1/2 top-1/2 group-hover:backdrop-blur-sm">
                <Button
                  text="Add to cart"
                  bgColor="bg-primary"
                  textColor="text-white"
                ></Button>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold ">{item.title}</h2>
              <h2 className="font-bold ">${item.price}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
