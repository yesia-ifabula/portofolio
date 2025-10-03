import React, { use } from 'react';
import Image from "next/image";

const About: React.FC = () => {
    return (
       <section className="py-8 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Gambar di kiri */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                <Image
                    src="lanyardImage.svg" // gunakan slash di depan agar pasti dari /public
                    alt="Yesia Plorina"
                    width={300}
                    height={300}
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                    priority
                />
                </div>
                {/* Teks di kanan */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Hi, I’m Yesia Plorina 👋
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
                        I am a Mobile developer with React Native Typescript, Kotlin for Android, and Java for Android. I am also a Fullstack JavaScript software engineer (Vue.js, React.js Typescript for Frontend, Node.js for Backend, and jQuery). Eager to learn and get to know more programming languages, because I think technology is the future.
                    </p>
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition text-sm sm:text-base"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>

    );
};

export default About;