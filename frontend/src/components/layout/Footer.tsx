"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/" || pathname?.startsWith("/admin") || pathname?.startsWith("/welcome")) {
    return null;
  }

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-200 pb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/home" className="text-3xl font-paint tracking-wider text-primary mb-6 inline-block leading-none">
              Vijayalakshmi <br /><span className="text-gold">Tanjore Art gallery</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Discover exclusive, curated luxury artworks that speak to your soul.
              Elevate your space with premium pieces from renowned artists worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About the Artist</Link></li>
              <li><Link href="/login" className="hover:text-gold transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold shrink-0 mt-0.5" />
                <span>
                  #103, Needarajappaiyer Street,<br />(Bharathi Street Corner), Puducherry - 1.
                  <br />
                    <br />
                  {/* <span className="text-gold font-medium text-xs tracking-widest uppercase my-2 block">&</span> */}
                  #99, Eswaran Koil Street,<br />SBI Building, (Near Vijayaganapathy Stores),<br />Puducherry - 1.
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-gold shrink-0 mt-0.5" />
                <span className="flex flex-wrap items-center gap-x-2">
                  <a href="tel:+919486646913" className="hover:text-gold transition-colors">+91 94866 46913</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-gold shrink-0 mt-0.5" />
                <span className="flex flex-wrap items-center gap-x-1.5">
                  <a href="mailto:dineshvp1396@gmail.com" className="hover:text-gold transition-colors break-all">dineshvp1396@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vijayalakshmi Tanjore Art Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
