'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedOnScroll from '../components/AnimatedOnScroll';
import { motion } from 'framer-motion';
import PortfolioSection from '../components/PortfolioSection';

const projects = [
  {
    id: 'apartments',
    title: 'Retreat Centre I',
    image: '/images/portfolio/retreat_centre1.jpeg',
    description: 'Modern and stylish apartment interiors.',
  },
  {
    id: 'villas',
    title: 'Retreat Centre II',
    image: '/images/portfolio/retreat2.png',
    description: 'Contemporary elegance tailored for urban living',
  },
  {
    id: 'commercial',
    title: 'Royal Court',
    image: '/images/portfolio/royal_court.png',
    description: 'Chic and functional interiors for modern apartments.',
  },
];

const PortfolioPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll effect for mobile horizontal scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 3; // pixels per frame approx
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    let animationFrameId: number;

    const step = () => {
      scrollAmount += speed;
      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0; // loop back to start
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div>
      <main className="space-y-8 md:space-y-24 px-4 sm:px-8 md:px-16 pt-18 w-full max-w-screen-xl mx-auto bg-none">
        {/* About Section */}
        <AnimatedOnScroll>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-12 py-2 md:py-10 max-w-7xl mx-auto">
            
            {/* Text Content */}
            <div 
                className={`text-gray-600 text-xl leading-relaxed transition-all duration-300 `}>
                  <h1 className='text-yellow-800 text-3xl sm:text-4xl font-semibold '>About Us</h1>
                NQ Designs Pvt. Ltd. is a premier architecture and interior design firm committed
                to transforming spaces into inspiring experiences. With a deep focus on innovation,
                elegance, and functionality, we create homes and commercial spaces that stand the
                test of time.
            </div>
            
            {/* Image */}
            <div className="w-full h-full">
              <Image
                src="/images/portfolio/porfolio_hero.png"
                alt="NQ Designs office"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                priority
              />
            </div>
          </section>
        </AnimatedOnScroll>

        <section className="p-4 rounded-2xl shadow-lg">
          <div className="flex justify-center text-yellow-600 text-2xl py-4">Managing Director</div>
          <div className="max-w-6xl mx-auto ">
            <motion.div
              className="flex flex-col md:flex-row items-center  bg-gray-100 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Image Box */}
              <div className="w-full md:w-1/2 h-100 relative bg-[#d8e0f4]">
                <Image src="/images/md.jpg" alt="Managing Director" fill className="object-contain" />
              </div>

              {/* Text Box */}
              <div className="w-full md:w-1/2 p-6 md:p-8 bg-white rounded-2xl shadow-md border border-gray-200 text-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-800">Mrs. Nida Qadir</h3>
                <p className="text-sm text-gray-600 mb-2">Managing Director</p>

                <p
                  className={`text-base leading-relaxed text-gray-700 transition-all duration-300 ${
                    isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                  } md:line-clamp-none`}
                >
                  As the Founder and Managing Director of NQ Design Pvt. Ltd., I’ve always believed
                  that great design is where vision meets purpose. With a background in
                  architecture, construction, and interior design, my goal has been to lead projects
                  that are not only aesthetically beautiful but also deeply functional and enduring.
                  At NQ Design, I work closely with our clients and team to ensure each space we
                  create reflects elegance, efficiency, and individuality. From structural planning
                  to the final interior touches, I’m passionate about turning ideas into timeless
                  environments that enhance how people live and work.
                </p>

                {/* Read More Toggle (visible only on mobile) */}
                <button
                  className="mt-2 text-sm font-medium text-yellow-700 hover:underline md:hidden"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <AnimatedOnScroll>
          <section>
            <h2 className="text-3xl text-yellow-800 font-bold mb-8">Our Top Projects</h2>

            {/* Desktop View */}
            <motion.div
              className="hidden md:grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-500">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile View - Horizontal Scroll with Center Pop and Auto Scroll */}
            <div
              ref={scrollRef}
              className="md:hidden overflow-x-auto scrollbar-hide py-4"
              style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
            >

              <div className="flex space-x-6 px-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="snap-center flex-shrink-0 w-64 bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out"
                    whileInView={{ scale: 1.05 }}
                    whileHover={{ scale: 1.07 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={250}
                      className="w-full h-52 object-cover rounded-t-2xl"
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
                {/* Duplicate first few for seamless loop */}
                {projects.slice(0, 2).map((project, index) => (
                  <motion.div
                    key={'dup-' + project.id}
                    className="snap-center flex-shrink-0 w-64 bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out"
                    whileInView={{ scale: 1.05 }}
                    whileHover={{ scale: 1.07 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={250}
                      className="w-full h-52 object-cover rounded-t-2xl"
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedOnScroll>

        {/* View All Projects button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-yellow-800 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>

        {/* Customer Review */}
        <AnimatedOnScroll>
          <section className="bg-gray-50 p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 ">What Our Clients Say</h2>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “NQ Designs transformed our apartment into a luxurious and functional space. Their
              attention to detail and professionalism is unmatched.”
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800">— Asif Ali, Lucknow</p>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              "Working with NQ Designs was a seamless experience from start to finish. They
              understood our vision perfectly and delivered a space that is both elegant and
              comfortable."
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800">— Priya Singh, Lucknow</p>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              "NQ Designs brought our dream home to life with creativity and precision. The quality
              of their work and commitment to excellence truly set them apart."
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800">— Ramesh Sharma, Lucknow</p>
          </section>
        </AnimatedOnScroll>
         <AnimatedOnScroll>
          <PortfolioSection/>
        </AnimatedOnScroll>
        
      </main>
    </div>
  );
};

export default PortfolioPage;
