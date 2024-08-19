import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import headphone from "./assets/hero/headphone.png";
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
const BannerData = {
  discount: "30% OFF",
  title: "Fine smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Quisquam, quos.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Quisquam, quos.",
  bgColor: "#2dcc5f",
};
function App() {
  return (
    <div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
