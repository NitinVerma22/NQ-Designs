'use client';
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import FreeConsultationModal from "./FreeConsultationModal";

const PortfolioSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 bg-[#9d8977] rounded-2xl shadow px-4 py-6 max-w-full h-[60vh] overflow-x-hidden">
      
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Ready to Transform Your Space?
        </h2>
        <p className="text-white mb-6">
          Let's bring your dream space to life with our expert design and architecture services.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full py-3 text-sm bg-yellow-800 text-white font-bold rounded-md hover:bg-yellow-600 transition shadow-md animate-pulse"
        >
          Free Consultation
        </button>
      </div>

      {/* Cloudinary Video Embed */}
      <div className="max-w-full w-full bg-white shadow-xl rounded-xl overflow-hidden p-4 border border-yellow-800 mx-auto">
        <h2 className="text-xl font-bold text-yellow-800 mb-4 text-center">Portfolio</h2>
        <div className="relative w-full aspect-[9/16] border border-yellow-800 rounded-md overflow-hidden">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dqk43sqxo&public_id=WhatsApp_Video_2025-06-09_at_12.02.07_PM_q7gahi&profile=cld-default&autoplay=1&muted=1&controls=0&loop=1&poster=https://res.cloudinary.com/dqk43sqxo/image/upload/v1717920000/thumbnail.jpg"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
            title="Portfolio Video"
          />
        </div>
        <a
          href="/my_broucher.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center border border-yellow-800 text-yellow-800 py-2 rounded hover:bg-yellow-100 transition"
        >
          View Portfolio
        </a>
      </div>

      <FreeConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default PortfolioSection;
