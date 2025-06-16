"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import FreeConsultationModal from "./FreeConsultationModal";
import {event} from '../utils/gtag';
const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/#portfolio" },
  { name: "Contact Us", path: "/#contact" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#fefefe]/90 backdrop-blur-md shadow-sm">

      {/* ================= Desktop Header ================= */}
      <div className="hidden md:flex items-center justify-between h-20 max-w-7xl mx-auto px-4 md:px-8">

        {/* Left: Logo + Company Name */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="NQ Designs Logo" width={60} height={60} className="rounded-full  border-3 border-yellow-800 " />
          <span className="text-2xl font-bold tracking-wide text-yellow-800 font-serif">NQ Designs</span>
        </motion.div>

        {/* Center: Nav Links */}
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex space-x-8 text-md font-medium text-yellow-800">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="hover:text-blue-600 transition duration-200">
              {item.name}
            </Link>
          ))}
        </motion.nav>

        {/* Right: Consultation Button */}
        <div className="flex items-center">
          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2 bg-yellow-800 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
          >
            Free Consultation
          </button>
        </div>
      </div>

      {/* ================= Mobile Header ================= */}
      <div className="flex md:hidden items-center justify-between px-4 h-20 w-full">

        {/* Logo */}
        <div className="flex items-center  ">
          <Image src="/images/logo.png" alt="NQ Designs Logo" width={50} height={50} className="rounded-full  border-2 border-yellow-800" />
          <span className="text-xl font-bold tracking-wide text-yellow-800 px-2">NQ Designs</span>
        </div>

        {/* Social Icons */}
        
        <div className="flex  space-x-5 ml-12 border rounded-full p-2 px-2 border-yellow-800">
           <a href="tel:+918853008603" target="_blank" rel="noopener noreferrer"><FaPhone className="text-yellow-800 text-lg" /></a>
          <a href="https://www.facebook.com/nqdesigns.lucknow" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-yellow-800 text-lg" /></a>
          <a href="https://www.instagram.com/_nqdesigns" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-yellow-800 text-lg" /></a>
          <a href="mailto:designsnq@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="text-yellow-800 text-lg" /></a>
         
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
          <svg className="w-6 h-6 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ================= Mobile Nav Menu ================= */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 right-0 w-1/2 h-[calc(100vh-5rem)] z-50 bg-[#fefefe]/90 backdrop-blur-md shadow-sm border-l border-yellow-800 px-4 py-6 animate-slideIn">

          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-yellow-800 text-3xl font-bold">
            &times;
          </button>

          {/* Menu Links */}
          <motion.div
            className="flex flex-col items-center space-y-3 mt-8 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }} className="w-full">
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center border border-yellow-800 text-yellow-900 font-bold py-3 rounded-md hover:bg-yellow-800 hover:text-white transition duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Free Consultation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6 w-full"
            >
             <button
  onClick={() => {
    setMenuOpen(false);
    setModalOpen(true);
    event({
      action: 'click_free_consultation',
      category: 'engagement',
      label: 'Free Consultation Button (Mobile Menu)',
    });
  }}
  className="w-full py-3 text-sm bg-yellow-800 text-white font-bold rounded-md hover:bg-yellow-600 transition shadow-md animate-pulse"
>
  Free Consultation
</button>

            </motion.div>
          </motion.div>
        </div>
      )}

      {/* ========== Modal ========= */}
      <FreeConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}





