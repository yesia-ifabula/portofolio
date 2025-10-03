"use client";

import AnimatedSection from "../../component/AnimatedSection";
import Header from "../../component/Header";
import { useEffect, useRef, useState } from "react";
import IntroSection from "./component/IntroSection";
import About from "./component/About";

const sections = ["home", "about", "projects", "contact"];

export default function HomePage() {
 const [active, setActive] = useState("projects");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const handleScroll = () => {
            let current = "projects";
            for (const id of sections) {
            const ref = sectionRefs.current[id];
            if (ref) {
                const rect = ref.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 100) {
                current = id;
                break;
                }
            }
            }
            setActive(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        // Tambahkan observer untuk ref
        const interval = setInterval(handleScroll, 500);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col bg-gray-50 scroll-smooth">
          {/* Header */}
          <Header activeSection={active} />
    
          {/* Hero Section */}
          <AnimatedSection
            id="home"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            innerRef={(el) => {
                sectionRefs.current["home"] = el as HTMLElement | null;
            }}
          >
            <IntroSection />
          </AnimatedSection>

          {/* Hero Section */}
          <AnimatedSection
            id="about"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            innerRef={(el) => {
                sectionRefs.current["about"] = el as HTMLElement | null;
            }}
          >
            <About />
          </AnimatedSection>
          {/* Projects Section */}
          <AnimatedSection
            id="projects"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            innerRef={(el) => {
                sectionRefs.current["projects"] = el as HTMLElement | null;
            }}          
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 mb-8 text-center max-w-xl">
              Daftar project yang pernah saya buat akan tampil di sini.
            </p>
            {/* Tambahkan daftar project di sini */}
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection
            id="contact"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            innerRef={(el) => {
                sectionRefs.current["contact"] = el as HTMLElement | null;
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-8 text-center max-w-xl">
              Silakan hubungi saya melalui email: yesia@example.com
            </p>
            {/* Tambahkan form kontak atau info lain di sini */}
          </AnimatedSection>
          {/* Footer */}
          <footer className="bg-white py-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yesia Plorina. All rights reserved.
          </footer>
        </div>
  )
}
