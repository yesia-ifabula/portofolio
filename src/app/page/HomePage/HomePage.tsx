/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AnimatedSection from "../../component/AnimatedSection";
import Header from "../../component/Header";
import { useEffect, useRef, useState } from "react";
import IntroSection from "./component/IntroSection";
import About from "./component/About";
import Product from "./component/Project";
import ContactMe from "./component/ContactMe";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { Experience, Education } from '@/app/helper/type';

const sections = ["home", "about", "projects", "contact"];


interface ProfileData {
  [key: string]: unknown;
}

export default function HomePage() {
  const [active, setActive] = useState("projects");
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [data, setData] = useState<ProfileData | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
      fetchData();
      fetchDataExperiences();
      fetchDataEducations();
      fetchDataProgrammingLanguages();
      fetchDataProducts();
    }, []);

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

    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "profile"));
      const result = snapshot.docs.map(doc => doc.data());
      setData(result[0]);
    };

    const fetchDataExperiences = async () => {
      const snapshot = await getDocs(collection(db, "experiences"));

      const result = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Experience[];

      setExperiences(result);
    }

    const fetchDataEducations = async () => {
      const snapshot = await getDocs(collection(db, "educations"));

      const result = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as unknown as Education[];

      setEducations(result);
    }

    const fetchDataProgrammingLanguages = async () => {
      const docRef = doc(db, "skills", "programmingLanguages");
      const snapshot = await getDoc(docRef);

      const data = snapshot.data()?.items;

      setProgrammingLanguages(data || []);
    }

    const fetchDataProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const products = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setProducts(products);
    }


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
            <>
              <IntroSection isMobile={isMobile} />
              {active !== "contact" && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path stroke="#C8A2C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              )}
            </>
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
            <About
              isMobile={isMobile}
              data={data}
              experiences={experiences}
              educations={educations}
              programmingLanguages={programmingLanguages}
             /> 
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
            {/* Tambahkan daftar project di sini */}
            <Product
              isMobile={isMobile}
              products={products}
            />
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
            <ContactMe data={data} />
            {/* Tambahkan form kontak atau info lain di sini */}
          </AnimatedSection>
          {/* Footer */}
          <footer className="bg-white py-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yesia Plorina. All rights reserved.
          </footer>
        </div>
  )
}
