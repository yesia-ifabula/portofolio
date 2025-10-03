"use client";
import React from 'react';
import Image from "next/image";

const IntroSection: React.FC = () => {
    return (
        <section
            className="bg-[#F9F9F9]"
            style={{ padding: '2rem 0', textAlign: 'center' }}
        >
            <div className="flex flex-col items-center mb-6 relative">
                <Image
                    src="home.svg"
                    alt="Yesia Plorina"
                    width={600}
                    height={1000}
                    priority
                />
            </div>
            <div className="text-center max-w-xl mx-auto">

                <a
                    href="#about"
                    className="bg-[#C8A2C8] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow hover:bg-[#DDCDEA] transition text-sm sm:text-base"
                >
                    View My Profil
                </a>
            </div>
        </section>
    );
};

export default IntroSection;