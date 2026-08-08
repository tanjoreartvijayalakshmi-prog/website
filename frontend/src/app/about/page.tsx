"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              {/* Using a placeholder for the artist portrait */}
              <div className="absolute inset-0 bg-primary/5 shadow-2xl -translate-x-6 translate-y-6"></div>
              <Image
                src="/images/artist.jpeg"
                alt="Artist Portrait"
                fill
                className="object-cover relative z-10"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-5xl font-heading text-gold mb-6">The Artist</h1>
            <div className="w-16 h-1 bg-gold mb-8"></div>

            <div className="space-y-6 text-foreground leading-relaxed text-lg font-normal">
              <p>
                Mrs. Vijayalakshmi Prabakaran is a renowned drawing artist, and the Founder of Vijayalakshmi Tanjore Art Gallery in Puducherry. With over 35 years of experience, she has dedicated her life to preserving and promoting the rich heritage of traditional Tanjore painting.
              </p>
              <p>
                She has trained more than 32,000 students from India and abroad, inspiring artists of all ages through her passion for this timeless art form. Her excellence in Tanjore painting has earned her recognition in the Guinness World Records, making her one of the most respected names in the field.
              </p>
              <p>
                Today, her gallery continues to create authentic handcrafted Tanjore paintings while nurturing the next generation of artists through expert guidance and workshops.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10">
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">32,000+</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-foreground/80">Students Trained Worldwide</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">2015</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-foreground/80">Kalaimamani Award</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">8</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-foreground/80">International Awards</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading text-gold mb-2">35+</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-foreground/80">Years of Experience in Tanjore Painting</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-heading text-gold mb-4 text-center">Honours & Awards</h2>
            <div className="w-24 h-1 bg-gold"></div>
          </div>

          <div className="relative max-w-4xl mx-auto py-8">
            {/* Center Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 md:-translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              {/* Award 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex flex-col md:flex-row justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                  <h3 className="text-2xl font-heading text-gold mb-3">Guinness World Records</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Recognized for creating the Largest Seed Mosaic and Largest Bean Mosaic, showcasing exceptional creativity and artistic excellence.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-col md:flex-row-reverse justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-12 md:pr-0 text-left">
                  <h3 className="text-2xl font-heading text-gold mb-3">Kalaimamani Award</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Honoured with the Puducherry State Kalaimamani Award (2015) for outstanding contribution to the field of traditional Tanjore Art.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative flex flex-col md:flex-row justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                  <h3 className="text-2xl font-heading text-gold mb-3">Elite World Book of Record</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Achieved the record for the Longest Tanjore Painting Marathon (24 Hours), demonstrating dedication and artistic endurance.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative flex flex-col md:flex-row-reverse justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-12 md:pr-0 text-left">
                  <h3 className="text-2xl font-heading text-gold mb-3">Indian & Asian World Book of Records</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Recognized for creating the Largest Painting Using Coffee Powder, reflecting innovation in fine arts.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative flex flex-col md:flex-row justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                  <h3 className="text-2xl font-heading text-gold mb-3">Raja Ravi Varma Award</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Honoured by the Puducherry School of Arts for excellence and remarkable achievements in visual arts.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 6 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative flex flex-col md:flex-row-reverse justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-12 md:pr-0 text-left">
                  <h3 className="text-2xl font-heading text-gold mb-3">Lifetime Achievement Award</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Presented by Puduvai Puratchi Book Publisher in recognition of lifelong dedication to art and cultural preservation.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 7 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative flex flex-col md:flex-row justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                  <h3 className="text-2xl font-heading text-gold mb-3">Outstanding Women Entrepreneur Award</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Awarded by JCI Puducherry Midtown for inspiring leadership and contributions to art entrepreneurship.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>

              {/* Award 8 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative flex flex-col md:flex-row-reverse justify-between w-full"
              >
                <div className="w-full md:w-[45%] pl-12 md:pl-12 md:pr-0 text-left">
                  <h3 className="text-2xl font-heading text-gold mb-3">Best Artist Award</h3>
                  <p className="text-base text-foreground font-normal leading-relaxed">
                    Recognized by Oviya Nun Kalai Kuzhu, Puducherry for exceptional talent and artistic excellence.
                  </p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-background bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-24 border-t border-foreground/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading text-foreground mb-2">Explore the Collection</h3>
            <p className="text-foreground/70 font-light">View all authentic Tanjore artworks available for purchase.</p>
          </div>
          <Link
            href="/gallery"
            className="border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 font-medium tracking-widest uppercase text-sm transition-all duration-300"
          >
            View Gallery
          </Link>
        </div>

      </div>
    </div>
  );
}
