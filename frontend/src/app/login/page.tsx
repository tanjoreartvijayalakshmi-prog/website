"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded admin password for portfolio demonstration
    if (password === "admin123") {
      // In a real app, you would set a secure HTTP-only cookie here via an API
      document.cookie = "admin_auth=true; path=/";
      router.push("/admin");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Decorative gold accents matching the home page */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="text-3xl font-paint text-foreground tracking-wider leading-none text-center">
            Vijayalakshmi <br />
            <span className="text-gold">Tanjore Art gallery</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-2xl border border-gold/20 p-8 md:p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gold/15 border border-gold/30 rounded-full flex items-center justify-center mb-4 text-gold">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-heading text-foreground font-bold tracking-wide">Admin Portal</h1>
            <div className="w-12 h-0.5 bg-gold mt-3"></div>
            <p className="text-foreground/60 text-sm mt-4 text-center">Enter your secure credential to manage the gallery.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold tracking-widest text-foreground/60 uppercase mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-foreground/20 py-2 px-1 focus:outline-none focus:border-gold transition-colors bg-transparent text-foreground"
                placeholder="••••••••"
                required
              />
              {error && <p className="text-red-500 text-xs mt-2">Incorrect password. Please try again.</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-foreground py-3.5 font-medium tracking-widest uppercase hover:bg-primary hover:text-background transition-colors text-sm"
            >
              Access Dashboard
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 text-sm hover:text-gold transition-colors tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
