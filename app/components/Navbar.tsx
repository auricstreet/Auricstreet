"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutPage" },
  { name: "Auric Dashboard V1", href: "/dashboard" },
  { name: "Curriculum", href: "/Curriculum" },
  { name: "Student Login", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ⭐ detect current route

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="navbar">
        <div className="brand flex items-center gap-3 cursor-pointer" onClick={() => (window.location.href = "/")}>
  <img
 src="/logo.png"
    alt="Auric Street"
    className="nav-logo"
  />
  <span className="nav-brand-text">
  AURIC STREET<span className="tm-mark">TM</span>
</span>
</div>


        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link auric-dashboard-link ${
                pathname === link.href ? "nav-active" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden block">
          <button
            onClick={() => setOpen(true)}
            className="text-white/80 hover:text-white transition"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.55)] z-[9990] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 w-[72%] h-full bg-[rgba(10,17,40,0.88)] backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end text-white/70 hover:text-white mb-4"
              >
                ✕
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-white font-[var(--subheading-font)] text-[20px] tracking-wide border-b border-white/10 pb-3 ${
                    pathname === link.href ? "nav-active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-auto pt-8 text-white/80 text-[14px]">
                Auric Street © {new Date().getFullYear()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
