import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";
const MenuOptions = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropdownOptions = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <div className="py-4 ">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl"
            >
              ECircle
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuOptions.map((option, index) => (
                  <li key={index}>
                    <a
                      href={option.link}
                      className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
                    >
                      {option.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href=""
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className=" absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2 ">
                      {DropdownOptions.map((option, index) => (
                        <li className="w-full" key={index}>
                          <a
                            href={option.link}
                            className="inline-block w-full p-2 font-semibold text-gray-500 duration-200 rounded-md hover:bg-primary/20 dark:hover:text-white"
                          >
                            {option.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="relative hidden group sm:block">
              <input type="text" placeholder="search" className=" search-bar" />
              <IoMdSearch className="absolute text-xl text-gray-600 duration-200 -translate-y-1/2 group-hover:text-primary dark:text-gray-400 top-1/2 right-3" />
            </div>
            <button className="relative p-3 ">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                4
              </div>
            </button>
            <div className="">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
