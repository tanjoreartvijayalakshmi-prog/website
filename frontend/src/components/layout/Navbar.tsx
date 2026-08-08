"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/" || pathname?.startsWith("/admin") || pathname?.startsWith("/welcome")) {
    return null;
  }

  const isHome = pathname === "/home";

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isHome
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home" className="text-2xl md:text-3xl font-paint text-gold tracking-wider leading-none">
          Vijayalakshmi <br className="md:hidden" /><span className="text-foreground">Tanjore Art gallery</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold",
                pathname === link.href ? "text-gold" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions (Search, WhatsApp) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-foreground hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a href="https://wa.me/9486646913" target="_blank" className="text-gold hover:text-foreground transition-colors" title="Order via WhatsApp">
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-t border-foreground/10 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "px-8 py-4 text-sm uppercase tracking-widest font-medium border-b border-foreground/5",
                    pathname === link.href ? "text-gold" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-8 px-8 py-6 justify-center">
                <button className="text-foreground hover:text-gold">
                  <Search className="w-6 h-6" />
                </button>
                <a href="https://wa.me/9486646913" target="_blank" className="text-foreground font-medium uppercase tracking-widest hover:text-gold">
                  WhatsApp Order
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
