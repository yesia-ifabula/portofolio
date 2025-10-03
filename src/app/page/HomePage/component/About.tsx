import React, { use } from 'react';
import Image from "next/image";

const About: React.FC = () => {
    return (
       <section style={{ padding: '2rem 0' }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Gambar di kiri */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                    <Image
                        src="lanyardImage.svg" // ganti sesuai path gambar kamu
                        alt="Yesia Plorina"
                        width={200}
                        height={500}
                        className=""
                        priority
                    />
                </div>
                {/* Teks di kanan */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Hi, I’m Yesia Plorina 👋
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 max-w-xl">
                        I am a Mobile developer with React Native Typescript, Kotlin for Android, and Java for Android, I am also a Fullstack javascript software engineer (Vue.js, and React.Js Typescript for Frontend and Node.Js for Backend, and Jquery). Eager to learn and getting to know more programming languages, because I think technology is the future
                    </p>
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>

    );
};

export default About;