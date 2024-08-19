import Heading from "../../shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";
import { motion } from "framer-motion";
const BlogsData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget consectetur odio. Donec ac libero nec lorem ultricies.",
    published: "Jan 20, 2024 By Dilshad",
    image: img1,
    delay: 0.25,
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: img2,
    delay: 0.5,
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: img3,
    delay: 0.75,
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-7 sm:gap-4">
          {BlogsData.map((item, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: item.delay,
                  ease: "easeInOut",
                },
              }}
              className="bg-white dark:bg-gray-900"
              key={index}
            >
              <div className="mb-2 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2 ">
                <p className="text-xs text-gray-500">{item.published}</p>
                <p className="font-bold line-clamp-1">{item.title}</p>
                <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
