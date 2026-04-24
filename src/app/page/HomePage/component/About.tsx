import React from 'react';
import Image from "next/image";
import { Experience, Education } from '@/app/helper/type';
import AboutMobile from './AboutMobile';

const About: React.FC <{
    isMobile: boolean
    data: Record<string, unknown> | null
    experiences: Experience[]
    educations: Education[]
    programmingLanguages: string[]
}> = ({
    isMobile,
    data,
    experiences,
    educations,
    programmingLanguages
}) => {
    const intro = {
        title: "Hi, I’m",
        name: "Yesia Plorina",
        description: "I am a Mobile developer with React Native Typescript, Kotlin for Android, and Java for Android. I am also a Fullstack JavaScript software engineer (Vue.js, React.js, Next.Js Typescript for Frontend, Node.js for Backend, and jQuery). Eager to learn and get to know more programming languages, because I think technology is the future.",
    }

    function formatRange(start: string, end: string) {
        if (end === "present") return `${formatDate(start)} - Present (${getDuration(start, end)})`;
        return `${formatDate(start)} - ${formatDate(end)} (${getDuration(start, end)})`;
    }

    function formatDate(dateStr: string) {
        const date = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    }

    function getTodayYMD() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    function getDuration(start: string, end: string) {
        let endDate: Date;
        if (end === "present") {
            endDate = new Date(getTodayYMD()); // gunakan format YYYY-MM-DD
        } else {
            endDate = new Date(end);
        }
        const startDate = new Date(start);

        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years > 0 ? years + ' yr ' : ''}${months > 0 ? months + ' mo' : ''}`.trim();
    }

    return !isMobile ? (
        <section className="w-screen h-screen py-8 px-4 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 items-stretch w-full h-full gap-10">
                {/* Kiri: Image (1/4 lebar) */}
                <div className="flex justify-center items-center md:col-span-1 h-full">
                    <Image
                    src={isMobile ? "aboutmeMobile.svg" : "aboutme.svg"}
                    alt="Yesia Plorina"
                    width={300}
                    height={400}
                    className="object-contain"
                    priority
                    />
                </div>
                {/* Kanan: Text (3/4 lebar), dibagi 3 bagian vertikal */}
                <div className="flex flex-col h-full min-h-0 md:col-span-3">
                {/* 1/4 tinggi: Intro */}
                    <div className="flex-1 basis-1/4 flex flex-col justify-center min-h-0">
                        <h1 className="font-inika text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 w-full text-center md:text-left">
                        <span className="text-black">{intro?.title}</span> <span className="text-[#A678A6]">{data?.title as string}</span>
                        </h1>
                        <p className="font-inika text-xs sm:text-sm md:text-base text-gray-700 w-full text-center md:text-left">
                            {data?.desc as string}
                        </p>
                    </div>
                    {/* 2/4 tinggi: Experience & Education */}
                    <div className="flex-2 basis-2/4 flex items-stretch justify-center gap-8 pt-8 min-h-0">
                        {/* EXPERIENCE */}
                        <section className="flex-1 flex flex-col justify-start min-h-0">
                            <h1 className="font-inika text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
                                EXPERIENCE
                            </h1>
                            <ul className="space-y-2">
                                {experiences.map((exp, idx) => (
                                <li key={idx} className="text-sm md:text-xs text-gray-700">
                                    <span className="font-bold">{exp.title}</span>
                                    <div>
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline hover:text-blue-800"
                                        >
                                            {exp.company}
                                        </a>
                                    </div>
                                    <div>{formatRange(exp.periodStart ?? '', exp.periodEnd ?? '')}</div>
                                </li>
                                ))}
                            </ul>
                        </section>
                        {/* Garis vertikal */}
                        <div className="w-0.5 h-full bg-gray-300 mx-4 self-stretch" />
                        {/* EDUCATION */}
                        <section className="flex-1 flex flex-col justify-start min-h-0">
                            <h1 className="font-inika text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
                                EDUCATION
                            </h1>
                            <ul className="space-y-2">
                                {educations.map((exp, idx) => (
                                <li key={idx} className="text-sm md:text-xs text-gray-700">
                                    <span className="font-bold">{exp.study}</span>
                                    <div>
                                        <a
                                            href={exp.institutionUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline hover:text-blue-800"
                                        >
                                            {exp.institution}
                                        </a>
                                    </div>
                                    <div>{exp.period}</div>
                                    <a
                                    href={exp.urlDoc}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-600"
                                    >
                                    View Doc
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    {/* 1/4 tinggi: Programming Languages */}
                    <div className="flex-1 basis-1/4 flex flex-col justify-center min-h-0">
                        <h1 className="font-inika text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                            PROGRAMMING LANGUAGES
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            {programmingLanguages.map((lang, idx) => (
                                <span
                                key={idx}
                                className="bg-[#A678A6] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ): (
        <AboutMobile
            intro={intro}
            experiences={experiences}
            educations={educations}
            programmingLanguages={programmingLanguages}
            data={data}
        />
    )
};

export default About;