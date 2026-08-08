import { ReactNode } from "react";
import Link from "next/link";
import { Image as ImageIcon, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans fixed inset-0 z-[100]">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground text-background flex flex-col shadow-2xl">
        <div className="p-6 border-b border-background/10 flex flex-col gap-1">
          <h2 className="text-2xl font-heading font-bold tracking-wider text-gold">ADMIN</h2>
          <span className="text-background/50 text-[11px] uppercase tracking-widest">Gallery Management</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md bg-gold text-foreground transition-colors font-bold shadow-lg">
            <ImageIcon className="w-5 h-5" />
            <span className="font-medium tracking-wide">Artworks</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-background/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-md text-background/70 hover:text-background hover:bg-background/10 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background p-6 md:p-8 text-foreground">
        {children}
      </main>
    </div>
  );
}
