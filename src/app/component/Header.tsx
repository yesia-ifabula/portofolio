import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white shadow py-4 px-8 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <Image
                    aria-hidden
                    src="window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                <span className="font-bold text-xl text-gray-800">Yesia Plorina</span>
            </div>
            <nav className="space-x-6">
                <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </nav>
        </header>
    )
}