"use client";
import React from 'react';
import Image from "next/image";

const IntroSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {

    return (
        <section
            className="bg-[#F9F9F9] relative w-screen h-screen overflow-hidden flex items-end pb-1"
            style={{ textAlign: 'center' }}
        >
            <div className="relative w-full h-[80vh]">
                <a href="#about" className="block w-full h-full">
                    <Image
                        src={isMobile ? "homeMobile.svg" : "home2.svg"}
                        alt="Yesia Plorina"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </a>
            </div>
        </section>
    );
};

export default IntroSection;