type bannerData = {
  discount: string;
  title: string;
  date: string;
  image: string;
  title2: string;
  title3: string;
  title4: string;
  bgColor: string;
};
interface BannerProps {
  data: bannerData;
}
import { motion } from "framer-motion";
const Banner = (props: BannerProps) => {
  return (
    <div className=" min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: props.data.bgColor }}
          className="grid items-center grid-cols-1 gap-6 text-white md:grid-cols-3 rounded-3xl"
        >
          <div className="p-6 sm:p-8">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="text-sm "
            >
              {props.data.discount}
            </motion.p>
            <motion.h1
              initial={{ scale: 1.25, opacity: 0.5 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.25 },
              }}
              className="text-4xl font-bold uppercase lg:text-7xl"
            >
              {props.data.title}
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="text-sm "
            >
              {props.data.date}
            </motion.p>
          </div>
          <div className="flex items-center h-full ">
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.25, transition: { duration: 0.5 } }}
              src={props.data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="text-xl font-bold "
            >
              {props.data.title2}
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="text-3xl font-bold sm:text-5xl"
            >
              {props.data.title3}
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="text-sm leading-5 tracking-wide"
            >
              {props.data.title4}
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className=""
            >
              <button
                style={{ color: props.data.bgColor }}
                className="px-4 py-2 bg-white rounded-full "
              >
                Shop Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
