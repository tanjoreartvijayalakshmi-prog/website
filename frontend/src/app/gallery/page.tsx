"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function GalleryPage() {
  const [artworks, setArtworks] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`, {
          signal: AbortSignal.timeout(5000),
        });
        if (res.ok) {
          const data = await res.json();
          setArtworks(data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const displayArtworks = artworks;

  return (
    <div className="bg-background min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 border-b border-foreground/10 pb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading text-gold mb-4 tracking-wide font-light">The Gallery</h1>
          <p className="text-foreground/80 max-w-xl font-light tracking-wide">
            Explore our complete collection of original, certified masterpieces.
          </p>
        </div>

        {/* Artworks Grid */}
        {loading ? (
          <div className="text-center py-20 text-foreground/60 tracking-widest">LOADING COLLECTION...</div>
        ) : (
          <div className="w-full">
            {artworks.length === 0 ? (
              <div className="col-span-full py-20 text-center text-foreground/60 border border-dashed border-foreground/10">
                Gallery is currently empty. Add artworks via the Admin Panel.
              </div>
            ) : (
              Object.entries(
                artworks.reduce<Record<string, Record<string, unknown>[]>>((acc, art) => {
                  const kind = String(art.medium || 'Other');
                  if (!acc[kind]) acc[kind] = [];
                  acc[kind].push(art);
                  return acc;
                }, {})
              ).map(([kind, items]) => (
                <div key={kind} className="mb-20 last:mb-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {items.map((art, index) => (
                      <motion.div
                        key={String(art._id || art.id)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
                        className="group cursor-pointer flex flex-col"
                      >
                        <div
                          className="relative aspect-[5/6] overflow-hidden bg-primary/10 border border-foreground/5"
                        >
                          <Image
                            src={String((art.images as Record<string, unknown>[])?.[0]?.url || art.image || '/images/WhatsApp Image 2026-07-28 at 13.39.43.jpeg')}
                            alt={String(art.title)}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Low-res watermark overlay simulation */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                            <span className="text-foreground/30 font-heading text-2xl rotate-[-45deg] select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                              PREMIUM GALLERY
                            </span>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-3">
                          <div>
                            <h3 className="text-xl font-heading text-foreground group-hover:text-gold transition-colors">{String(art.title)}</h3>
                            <p className="text-foreground/80 text-sm mt-1">{String(art.artist)}</p>
                          </div>
                          <a
                            href={`https://wa.me/9486646913?text=${encodeURIComponent(`Hi, I'm interested in ordering the artwork: ${art.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full text-center border border-gold text-gold hover:bg-gold hover:text-background py-2.5 transition-all font-medium text-sm tracking-wide flex items-center justify-center gap-2 uppercase"
                          >
                            Place Order
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="border-t border-foreground/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading text-foreground mb-2">Want to Know the Artist?</h3>
            <p className="text-foreground/70 font-light">Learn about the journey behind these masterpieces.</p>
          </div>
          <Link
            href="/about"
            className="border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 font-medium tracking-widest uppercase text-sm transition-all duration-300"
          >
            About the Artist
          </Link>
        </div>
      </div>
    </div>
  );
}
