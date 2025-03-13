import {RevealOnScroll} from '../RevealOnScroll'

export const Home=()=>{
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
<div className="text-center z-10 px-4">
<h1 className="text-5xl md:text-7xl bg-gradient-to-r from-yellow-200 to-amber-600 
    font-bold mb-6 bg-clip-text text-transparent leading-tight">
    Hello, I am Mekdes Alemayehu
</h1>


<div className="flex flex-col md:flex-row items-center gap-6">
    <img src="mine.jpg" alt="Mekdes Alemayehu" 
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg" 
          />
<p className="text-white-400 text-lg mb-8 max-w-lg mx-auto">
    I'm a Full-stack developer and UI/UX designer
     passionate about creating seamless, user-friendly web applications. I specialize in crafting dynamic, responsive, and
     visually appealing solutions that enhance user experiences with clean code and modern technologies."</p>

</div>
<div className="flex justify-center space-x-4">
  <a href="#projects" 
    className="bg-amber-500/70 text-white py-3 px-6 rounded font-medium transition 
    relative overflow-hidden hover:translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
    View My Projects
  </a>

  <a href="#contact" 
    className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded font-medium
    transition-all duration-200 hover:translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
    Contact Me
  </a>
  <a href="/MkResume.pdf" download='MkResume.pdf'
    className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded font-medium
    transition-all duration-200 hover:translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
    Download My Cv
  </a>
</div>


</div>
</RevealOnScroll>
    </section>
}