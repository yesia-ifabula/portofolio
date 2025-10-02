import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow py-4 px-8 flex items-center justify-between">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Hi, I’m Yesia Plorina 👋
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Welcome to my portfolio! I’m a web developer passionate about building beautiful and functional web applications.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Yesia Plorina. All rights reserved.
      </footer>
    </div>
  );
}
