import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 md:px-12">
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r mt-14 from-yellow-200 to-amber-600 
              font-bold mb-6 bg-clip-text text-transparent leading-tight">
            Hello, I am Mekdes Alemayehu
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/mine.jpg" alt="Mekdes Alemayehu"
              className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-lg" />

            <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto text-center md:text-left">
              I'm a Full-stack developer and UI/UX designer passionate about creating seamless, user-friendly web applications.
              I specialize in crafting dynamic, responsive, and visually appealing solutions that enhance user experiences
              with clean code and modern technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <a href="#projects"
              className="bg-amber-500/70 text-white py-3 px-6 rounded font-medium transition hover:scale-105">
              View My Projects
            </a>

            <a href="#contact"
              className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded font-medium transition hover:scale-105">
              Contact Me
            </a>

            <a href="/MkResume.pdf" download='MkResume.pdf'
              className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded font-medium transition hover:scale-105">
              Download My CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};