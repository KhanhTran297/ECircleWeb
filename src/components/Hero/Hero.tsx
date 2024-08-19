import React from "react";
import Slider from "react-slick";
import headphoneimg from "../../assets/hero/headphone.png";
import vrimg from "../../assets/category/vr.png";
import macbookimg from "../../assets/category/macbook.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../shared/Button";
import { motion } from "framer-motion";
const HeroSlide = [
  {
    id: 1,
    img: headphoneimg,
    subtitle: " Beats Solo",
    title: "Wireless",
    title2: "Headphones",
  },
  {
    id: 2,
    img: vrimg,
    subtitle: " Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: macbookimg,
    subtitle: " Beats Solo",
    title: "Wireless",
    title2: "laptops",
  },
];
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseonHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container ">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center   ">
        <div className="container pb-8 sm:pb-0 ">
          <Slider {...settings}>
            {HeroSlide.map((slide, index) => (
              <motion.div className="" key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    className="relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pl-3 sm:pt-0 sm:text-left sm:order-1"
                  >
                    <h1 className="text-2xl font-bold sm:text-6xl lg:text-2xl">
                      {slide.subtitle}
                    </h1>
                    <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl ">
                      {slide.title}
                    </h1>
                    <h1 className="text-white text-5xl uppercase dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold  ">
                      {slide.title2}
                    </h1>
                    <div className="">
                      <Button
                        text={"Shop now"}
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    className="order-1 sm:order-2"
                  >
                    <div className="">
                      <img
                        src={slide.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain  mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40  "
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
