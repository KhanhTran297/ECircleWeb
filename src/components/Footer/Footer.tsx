import { FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa6";
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className=" dark:ng-gray-950">
      <div className="container">
        <div className="grid pt-5 pb-20 md:grid-cols-3 ">
          <div className="px-4 py-8 ">
            <a
              href="#"
              className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl"
            >
              ECircle
            </a>
            <p className="pt-3 text-gray-600 dark:text-white/70 lg:pr-24">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              nesciunt illo placeat reiciendis dolore optio aliquid a. Aliquam
              itaque eos fugit aspernatur quaerat est, porro similique.
              Consequatur rem facilis enim?
            </p>
          </div>
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <ul className="space-y-3 ">
                {FooterLinks.map((link, index) => (
                  <li className="" key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 duration-300 dark:text-gray-400 hover:text-black hover:dark:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-8">
              <ul className="space-y-3 ">
                {FooterLinks.map((link, index) => (
                  <li className="" key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 duration-300 dark:text-gray-400 hover:text-black hover:dark:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-bold sm:text-left">Adress</h1>
              <div className="">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-4xl " />
                  <p>
                    Vinhome grandpark S803 Thu Duc city, Ho Chi Minh city,
                    VietNam
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>0934768673</p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/ka.nart_/">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="https://www.facebook.com/KhanhTran297">
                    <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/in/khanhtran297/">
                    <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
