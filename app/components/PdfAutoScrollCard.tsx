'use client';

import { useEffect, useRef } from 'react';

const PdfAutoScrollCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    const interval = 30; // milliseconds

    const scrollInterval = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        scrollAmount = 0;
        container.scrollTop = 0; // Reset scroll to top
      } else {
        scrollAmount += speed;
        container.scrollTop = scrollAmount;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-4 border border-yellow-800 m-2">
      <h2 className="text-xl font-bold text-yellow-800 mb-4 text-center">Portfolio</h2>
      <div
        ref={scrollRef}
        className="h-96 overflow-y-scroll rounded-md border border-yellow-800"
      >
        <iframe
          src="/my_broucher.pdf" 
          className="w-full min-h-[7200px]"         allow="autoplay"
        ></iframe>
      </div>
      <button className="mt-4 w-full border border-yellow-800 text-yellow-800 py-2 rounded hover:bg-yellow-100 transition">
        View
      </button>
    </div>
  );
};

export default PdfAutoScrollCard;
