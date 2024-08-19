import React from "react";
import {
  FaCarSide,
  FaCheckCircle,
  FaWallet,
  FaHeadphonesAlt,
} from "react-icons/fa";
const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping on all Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "online Support 24/7",
    description: "Technical Support 24/7",
  },
];
const Services = () => {
  return (
    <div className="container my-14 md:my-20">
      <div className="grid">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 gap-y-8">
          {ServicesData.map((service, index) => (
            <div key={index} className="flex flex-row items-center gap-4">
              {service.icon}
              <div className="flex flex-col">
                <h1 className="font-bold lg:text-xl">{service.title}</h1>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
