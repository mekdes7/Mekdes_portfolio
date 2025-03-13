import {RevealOnScroll} from '../RevealOnScroll'
export const About=()=>{
    const frontend=[
        "HTML",
        "CSS",
        "Tailwind CSS",
        "ReactJs",
        "Javascript"
    ];
    const backend=[
        "NodeJS",
        "PHP",
        "MongoDB",
        "MySQL"
    ];
    const ui=[
        "user Research",
        "Figma",
        "Adobe XD"
    ]
    return<section id="about"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
   <div className="max-w-3xl mx-auto px-4">
  <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-amber-600 
    bg-clip-text text-transparent text-center">
    About Me
  </h2>


<div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
  <p className="text-gray-300 mb-6">
    I'm Mekdes Alemayehu, a passionate Full-Stack Developer and UI/UX Designer dedicated to crafting 
    seamless, user-friendly, and visually appealing web applications. With a strong focus on clean code,
    modern technologies, and intuitive design, I strive to create digital experiences that are both 
    functional and aesthetically pleasing.
   </p>
  <div className="block justify-center gap-6 overflow-x-auto">
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Front End</h3>
    <div className="flex flex-wrap gap-2">
        {frontend.map((tech,key)=>{
            return(
            <span 
            key={key}
            className="text-amber-500 py-1 px-3 rounded-full text-sm 
            hover:bg-amber-500/65 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
           {tech}
            </span>
            );
        })}
        
    </div>
    </div>
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Back End</h3>
    <div className="flex flex-wrap gap-2">
        {backend.map((tech,key)=>{
            return(
            <span 
            key={key}
            className="text-amber-500 py-1 px-3 rounded-full text-sm 
            hover:bg-amber-500/65 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">

           {tech}
            </span>
            );
        })}
        
    </div>
    </div>
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">UI/UX</h3>
    <div className="flex flex-wrap gap-2">
        {ui.map((tech,key)=>{
            return(
            <span 
            key={key}
            className="text-amber-500 py-1 px-3 rounded-full text-sm 
            hover:bg-amber-500/65 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
           {tech}
            </span>
            );
        })}
        
    </div>
    </div>
  </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transition-all">
<h3 className="text-xl font-bold mb-2">💼Experience</h3>
<div className="space-y-4 text-gray-300">
<div>
    <h3 className="text-amber-500" ><strong>Full-stack Developer Intern</strong> at Prodigy Tech (Mar.2025-present)</h3>
    <p>Gained hands-on experience in developing and managing full-stack projects, focusing on designing 
    scalable web applications, data analysis, and system optimization.</p>
</div>
<div>
    <h3 className="text-amber-500" ><strong>Website Developer</strong>  Self-Employed (Sep.2023-Present)</h3>
    <p>Designed, developed, and maintained responsive websites using HTML, CSS, 
        JavaScript, and CMS platforms like WordPress.</p>
</div>
<div>
    <h3 className="text-amber-500" ><strong>CEO, Graphics Designer & UI/UX Designer</strong> at MK Advert (Nov.2021-Mar.2025)</h3>
    <p>As the CEO and Lead Designer at MK Advert, I specialize in crafting visually compelling 
        graphics and intuitive UI/UX designs. I oversee branding, digital design, and user experience strategies 
        to ensure impactful and engaging solutions for clients.</p>
</div>
<div>
    <h3 className="text-amber-500" ><strong>Information organization and Analysis specialist</strong> at Addis Ababa city Administration (Jan.2023-Jan-2025)</h3>
    <p>
    As an Information Organization and Analysis Specialist, I analyze and organize data, 
    develop effective systems for data management, and provide insights to improve decision-making and data accessibility.
</p>


</div>
</div>
</div>
<div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transition-all">
<h3 className="text-xl font-bold mb-2">📚Education</h3>

<ul className="list-disc space-y-2">
<li className="text-amber-500" >
       <strong>Full-stack Development</strong> Certificate from Gobeze consulting  
    <p className="text-white">Relevant Course: Front-End, Back-End</p>
    </li>
    <li className="text-amber-500" >
        BSc degree in <strong>Computer Science</strong> from Jimma University(2018-2021) with CGPA 3.31  
    <p className="text-white ">Relevant Course: Data Structures, Web Development, Cloud Computing...</p>
    </li>
</ul>

</div>

  </div>
</div>
</RevealOnScroll>
    </section>
};