"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const IntroSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {

    return (
        <section
            className="bg-[#F9F9F9] relative w-screen h-screen overflow-hidden"
            style={{ textAlign: 'center' }}
        >
            <div className="absolute inset-0 w-full h-full">
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