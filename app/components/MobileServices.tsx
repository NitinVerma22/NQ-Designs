"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Hammer, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
const services = [
  {
    title: "Architecture",
    description:
      "Innovative, sustainable, and elegant building designs. Our architectural team specializes in creating unique concepts that balance aesthetics, functionality, and environmental responsibility. We collaborate closely with clients to understand their vision, site context, and requirements, ensuring every design is tailored to their needs. From initial sketches to detailed blueprints, we leverage the latest technology and design trends to deliver spaces that inspire and endure.",
    icon: <Building2 size={64} className="text-blue-600" />,
    image: "/images/architecture.png",
  },
  {
    title: "Construction",
    description:
      "End-to-end construction solutions with precision and quality. Our construction services cover every phase of your project, from initial planning and site preparation to final execution and handover. We utilize advanced techniques and high-quality materials to ensure durability, safety, and timely delivery. Our experienced team manages all aspects, coordinating seamlessly with architects and designers to bring your vision to life while maintaining strict quality standards and budget control. We are committed to transparent communication, proactive problem-solving, and delivering results that exceed expectations.",
    icon: <Hammer size={64} className="text-blue-600" />,
    image: "/images/construction.png",
  },
  {
    title: "Interior Design",
    description:
      "Modern interiors crafted for beauty and functionality. Our interior design services focus on creating harmonious spaces that reflect your personality and lifestyle. We blend aesthetics with practicality, ensuring every detail—from lighting to furniture selection—enhances the overall ambiance. Whether it's a residential or commercial project, our team delivers tailored solutions that maximize comfort, style, and usability. We stay updated with the latest trends and materials, offering creative layouts, color schemes, and decor ideas that transform ordinary spaces into extraordinary environments.",
    icon: <LayoutDashboard size={64} className="text-blue-600" />,
    image: "/images/interior_design.jpg",
  },
  {
    title: "Furniture Design",
    description:
      "Custom furniture solutions for every space. Our team crafts bespoke furniture pieces that blend seamlessly with your interiors, ensuring both comfort and style. From concept to installation, we focus on quality materials and innovative designs tailored to your needs. We offer a wide range of styles, finishes, and functionalities, from statement pieces to space-saving solutions. Our furniture is built to last, combining craftsmanship with modern manufacturing techniques to deliver exceptional results for homes, offices, and commercial spaces.",
    icon: <Building2 size={64} className="text-blue-600" />,
    image: "/images/furniture_design.png",
  },
  {
    title: "Renovation",
    description:
      "Transforming spaces with modern renovations. Our renovation services breathe new life into existing structures, enhancing both aesthetics and functionality. We handle everything from minor upgrades to complete overhauls, including structural changes, layout reconfigurations, and finishing touches. Our team works efficiently to minimize disruption, ensuring projects are completed on time and within budget. With a focus on quality craftsmanship and attention to detail, we help clients realize the full potential of their spaces, increasing value and comfort.",
    icon: <Hammer size={64} className="text-blue-600" />,
    image: "/images/renovation.jpg",
  },
];

export default function MobileServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollDirection = 1;
    const scrollSpeed = 1;

    const scroll = () => {
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth || el.scrollLeft <= 0) {
        scrollDirection *= -1;
      }
      el.scrollLeft += scrollDirection * scrollSpeed;
    };

    const interval = setInterval(scroll, 10); // Fast auto-scroll every 20ms
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <section id="service" className="py-20 bg-none">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4 text-center">
          Our Services
        </h2>

        <div
          className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide md:hidden"
          ref={scrollRef}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="min-w-[260px] h-76 max-w-xs bg-white rounded-lg shadow-md p-3 flex-shrink-0 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="w-full h-62 object-cover rounded-md mb-3"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-yellow-900">
                  {service.title}
                </h3>
                <span className="text-yellow-800 text-xs font-medium">Read More</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Description Popup */}
        <AnimatePresence>
          {activeIndex !== null && (
            <Dialog
              open={true}
              onClose={handleClose}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
            >
              <div className="flex items-center justify-center min-h-screen px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg"
                >
                  <button
                    className="text-gray-500 hover:text-red-600 float-right text-xl"
                    onClick={handleClose}
                  >
                    &times;
                  </button>

                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-2xl font-bold text-yellow-900 mb-3">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {services[activeIndex].description}
                  </p>
                </motion.div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
