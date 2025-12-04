import "@/app/globals.css";
import "@/public/fonts/font.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@/styles/auric.css";

import type { Metadata } from "next";
import TransitionProvider from "./providers/TransitionProvider";

import ClientEffects from "./components/ClientEffects";
import DarkMatterDust from "./components/AlienFX/DarkMatterDust";
import EclipsePass from "./components/AlienFX/EclipsePass";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// <-- Added


export const metadata: Metadata = {
  title: "Auric Street – US Futures & Forex Trading Hub",
  description:
    "Every trader deserves a second chance. South India’s first premium trading hub teaching US Futures & Forex with discipline and a 60-day funded trader roadmap.",
  openGraph: {
    title: "Auric Street – US Futures & Forex Trading Hub",
    description: "Every trader deserves a second chance.",
    images: ["/og.jpeg"],
    url: "https://yourdomain.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#071021" />
        <meta
          name="keywords"
          content="US Futures, Forex Trading, South India Trading Academy, Funded Trader Program, Auric Street"
        />
        <meta name="author" content="Auric Street" />
        <meta name="robots" content="index, follow" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      </head>

      <body className="bg-[var(--navy)] text-white antialiased overflow-x-hidden bg-black">

  {/* GLOBAL FX CONTAINER */}
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
    <DarkMatterDust />
    <EclipsePass />
    
  </div>

  {/* Client-side effects */}
  <ClientEffects />


  <TransitionProvider>
    <div id="preloader-root"></div>
    <main className="relative z-10 bg-black">
      
  
      {children}

      </main>
  </TransitionProvider>

</body>

    </html>
  );
}
