"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WelcomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4EBE1] overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Untitled design (2).png"
          alt="Welcome Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content overlay */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-4 pt-[45vh] md:pt-[42vh]"
          >
            {/* Welcome To with decorative lines */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-16 bg-[#B28330]/50"></div>
              <span className="text-[#B28330] tracking-[0.4em] uppercase text-xs font-sans font-medium">
                Welcome To
              </span>
              <div className="h-[1px] w-16 bg-[#B28330]/50"></div>
            </motion.div>

            {/* Vijayalakshmi */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-heading text-[#3C2B22] leading-tight mb-2"
            >
              Vijayalakshmi
            </motion.h1>

            {/* Tanjore Art Gallery */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-3xl md:text-4xl font-paint text-[#B28330] mb-6"
            >
              Tanjore Art Gallery
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-[1px] w-20 bg-[#C6A55B]/50"></div>
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#C6A55B]/60">
                <ellipse cx="8" cy="5" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="5" cy="8" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="11" cy="8" rx="5" ry="3" fill="currentColor" />
                <circle cx="8" cy="8" r="2" fill="currentColor" />
              </svg>
              <div className="h-[1px] w-20 bg-[#C6A55B]/50"></div>
            </motion.div>

            {/* Enter Gallery Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link
                href="/home"
                className="group inline-flex items-center gap-3 bg-[#B28330] text-white px-10 py-4 font-medium tracking-[0.25em] uppercase text-sm hover:bg-[#3C2B22] transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                Enter Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-col items-center mt-12"
            >
              <div className="w-5 h-8 border border-[#B28330]/30 rounded-full flex items-start justify-center pt-1.5">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1.5 bg-[#B28330]/40 rounded-full"
                />
              </div>
              <span className="text-[#B28330]/50 text-[9px] tracking-[0.3em] uppercase mt-2">
                Scroll
              </span>
              <span className="text-[#B28330]/30 text-[10px]">▼</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
