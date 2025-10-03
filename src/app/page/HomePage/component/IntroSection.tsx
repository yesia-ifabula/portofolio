"use client";
import React from 'react';
import Image from "next/image";

const IntroSection: React.FC = () => {
    return (
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
            <div className="flex flex-col items-center mb-6 relative">
                <Image
                    src="home.svg"
                    alt="Yesia Plorina"
                    width={1000}
                    height={2000}
                    priority
                />
                {/* <h1
                    className="
                        text-4xl font-extrabold text-right
                        absolute top-10 right-4
                        max-[830px]:static max-[830px]:order-last max-[830px]:mt-4
                        max-[600px]:text-2xl
                        h1-move-down
                    "
                    style={{ color: "#C8A2C8" }}
                    >
                    Software Engineer
                </h1> */}
            </div>
        </section>
    );
};

export default IntroSection;