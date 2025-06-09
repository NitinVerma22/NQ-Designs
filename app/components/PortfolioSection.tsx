'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;
    const interval = 30;

    const scrollInterval = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        scrollAmount = 0;
        container.scrollTop = 0;
      } else {
        scrollAmount += speed;
        container.scrollTop = scrollAmount;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 bg-[#9d8977] rounded-2xl shadow px-4 py-6 max-w-full overflow-x-hidden">
      
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Ready to Transform Your Space?
        </h2>
        <p className="text-white mb-6">
          Let's bring your dream space to life with our expert design and architecture services.
        </p>
        <Link
          href="/contact"
          className="inline-block text-white bg-yellow-800 px-6 py-3 rounded-full hover:bg-yellow-700 transition"
        >
          Get Free Consultation
        </Link>
      </div>

      {/* PDF Auto Scroll Section */}
      <div className="max-w-full w-full bg-white shadow-xl rounded-xl overflow-hidden p-4 border border-yellow-800 mx-auto">
        <h2 className="text-xl font-bold text-yellow-800 mb-4 text-center">Portfolio</h2>
        <div
          ref={scrollRef}
          className="h-96 overflow-y-scroll rounded-md border border-yellow-800"
        >
          <iframe
            src="/my_broucher.pdf"
            className="w-full min-h-[7200px]"
            allow="autoplay"
          ></iframe>
        </div>
        <button className="mt-4 w-full border border-yellow-800 text-yellow-800 py-2 rounded hover:bg-yellow-100 transition">
          View
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
