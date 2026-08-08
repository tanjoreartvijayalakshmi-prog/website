"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const heroImages = [
    { src: "/images/WhatsApp Image 2026-07-28 at 13.39.43.jpeg", alt: "Tanjore Art 1" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.50.56 (1).jpeg", alt: "Tanjore Art 2" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.50.56 (2).jpeg", alt: "Tanjore Art 3" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.50.56.jpeg", alt: "Tanjore Art 4" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.51.53.jpeg", alt: "Tanjore Art 5" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.59.11.jpeg", alt: "Tanjore Art 6" },
    { src: "/images/WhatsApp Image 2026-08-04 at 09.59.110.jpeg", alt: "Tanjore Art 7" },
    { src: "/images/WhatsApp Image 2026-08-04 at 10.00.59.jpeg", alt: "Tanjore Art 8" },
  ];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Editorial Hero Section */}
      <section className="relative w-full h-[calc(100vh-4rem)] mt-16 flex items-center justify-center overflow-hidden">
        {/* Right Side Image (Smoothly Blended via CSS Mask) */}
        <div
          className="absolute inset-0 z-0 flex justify-end pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
          }}
        >
          <div
            className="relative w-full md:w-[65%] h-full opacity-30 md:opacity-100"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
            }}
          >
            <AnimatePresence>
              <motion.div
                key={currentHeroIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentHeroIndex].src}
                  alt={heroImages[currentHeroIndex].alt}
                  fill
                  className="object-cover object-top md:object-[right_top]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-12 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold">Heritage in Every Stroke</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.1] mb-6 font-light">
              Where Tradition <br /> Meets Timeless <span className="text-gold italic font-paint">Tanjore Art</span>
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl leading-relaxed">
              Discover handcrafted Tanjore paintings adorned with authentic gold foil, intricate detailing, and centuries of artistic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/gallery"
                className="group relative flex items-center justify-center gap-3 bg-gold text-foreground px-10 py-4 font-medium tracking-widest uppercase hover:bg-white hover:text-foreground transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/60 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Featured Collection Strip */}
      <section className="py-24 bg-background relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">Timeless Masterpieces</h2>
              <p className="text-foreground/80 font-light tracking-wide leading-relaxed">
                Discover our carefully curated collection of authentic Tanjore paintings, where every artwork is handcrafted with intricate detailing, genuine gold foil, and vibrant colors. Each masterpiece celebrates India&apos;s rich artistic heritage and is accompanied by a certificate of authenticity.
              </p>
            </div>
            <Link href="/gallery" className="text-gold tracking-widest uppercase text-sm font-medium hover:text-foreground transition-colors flex items-center gap-2 border-b border-gold/30 pb-1">
              View All Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, src: "/images/WhatsApp Image 2026-08-04 at 09.50.56 (1).jpeg", title: "Sri Saraswathi", desc: "Classic Tanjore" },
              { id: 2, src: "/images/WhatsApp Image 2026-08-04 at 09.51.53.jpeg", title: "Sri Murugar", desc: "Classic Tanjore" },
              { id: 3, src: "/images/WhatsApp Image 2026-08-04 at 09.59.11.jpeg", title: "Sri Lalithambigai", desc: "Classic Tanjore" }
            ].map((item) => (
              <Link key={item.id} href="/gallery" className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-primary/10 border border-white/5">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-gold text-xs px-3 py-1 uppercase tracking-widest font-bold">
                    Featured
                  </div>
                </div>
                <h3 className="text-xl font-heading text-foreground group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-foreground/80 font-light mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-24 bg-primary/10 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-10">The Artist&apos;s Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="text-foreground tracking-widest uppercase text-sm font-black mb-3">Museum Quality</h4>
              <p className="text-foreground/80 font-light text-sm leading-relaxed">Crafted using only archival-grade materials ensuring your investment lasts generations.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="text-foreground tracking-widest uppercase text-sm font-black mb-3">Safe and Secure Shipping</h4>
              <p className="text-foreground/80 font-light text-sm leading-relaxed">Fully insured, white-glove delivery service to collectors anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
