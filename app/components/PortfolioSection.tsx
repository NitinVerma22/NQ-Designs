'use client';

import Link from 'next/link';
import {event} from '../utils/gtag'
const PortfolioSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12  rounded-2xl shadow px-4 max-w-full overflow-x-hidden">
      
      {/* Text Section */}
{/* Text Section */}
<div className="text-center md:text-left mb-8 px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-800">
    Ready to Transform Your Space?
  </h2>
  <p className="tex-gray-900 mb-6 md:hidden">
    Let's bring your dream space to life with our expert design and architecture services.
  </p>
<p className=" hidden md:block text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-4 max-w-3xl mx-auto">
  At <span className="font-semibold text-yellow-800">NQ Designs Pvt. Ltd.</span>, we take pride in delivering exceptional solutions across <span className="font-medium">Construction, Architecture, and Interior Designing</span>. With a strong commitment to quality and innovation, our team transforms ideas into timeless spaces that blend functionality with aesthetics. Explore our diverse portfolio that showcases the creativity, precision, and professionalism we bring to every project — from elegant interiors to large-scale architectural marvels and turnkey construction.
</p>

  <Link
    href="/contact"
    className="inline-block text-white bg-yellow-800 px-6 py-3 rounded-full hover:bg-yellow-700 transition"
  >
    Get Free Consultation
  </Link>
</div>

{/* Portfolio Video Card */}
<div className="max-w-full w-full bg-white shadow-xl rounded-xl overflow-hidden px-4 py-6 border border-yellow-800 mx-auto">
  <h2 className="text-xl font-bold text-yellow-800 mb-4 text-center">Portfolio</h2>

  {/* Aspect-ratio responsive wrapper */}
  <div className="relative w-full aspect-[9/16]  max-h-[60vh] sm:max-h-[60vh] mx-auto">
    <iframe
      src="https://player.cloudinary.com/embed/?cloud_name=dqk43sqxo&public_id=WhatsApp_Video_2025-06-09_at_12.02.07_PM_q7gahi&profile=cld-default&autoplay=1&muted=1&controls=0&loop=1&poster=https://res.cloudinary.com/dqk43sqxo/image/upload/6ab0f5b7-3006-43c2-8845-6e539a46cdb1_kgrfk7.jpg/dqk43sqxo/image/upload/v1717920000/thumbnail.jpg"
      allow="autoplay; fullscreen; encrypted-media"
      allowFullScreen
      
      loading="lazy"
      title="Portfolio Video"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>

<a
  href="/my_broucher.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    event({
      action: 'download_portfolio',
      category: 'portfolio',
      label: 'Portfolio PDF View',
    })
  }
  className="mt-6 block w-full text-center border border-yellow-800 text-yellow-800 py-2 rounded hover:bg-yellow-100 transition"
>
  View Portfolio
</a></div>

    </section>
  );
};

export default PortfolioSection;
