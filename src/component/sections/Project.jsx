import {RevealOnScroll} from '../RevealOnScroll'
export const Project=()=>{
    return<section id="projects" className="min-h-screen flex items-center justify-center py-20">
<RevealOnScroll>
<div className="max-w-5x1 mx-auto px-4">
<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-amber-600 
    bg-clip-text text-transparent text-center">
        Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-x1 border border-white/10 hover:-translate-y-1 
hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition"> 
    <h3 className="text-amber-500 font-bold mb-6"><strong>User Authentication System</strong></h3>
    <p>Two full-stack user authentication systems built with Firebase and MongoDB</p>
    <div><li>Technology I used for User Authentication using MERN stack JWT based, {["Tailwind CSS","ReactJs","NodeJs","ExpressJs","MongoDB","Postman"].map((tech,key)=>{
        return(
            <span 
            key={key}
            className="text-amber-500 py-1 px-3 rounded-full text-sm 
            hover:bg-amber-500/65 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
           {tech}
            </span>
            );
    })}
    </li>
    <li>Technology I used for User Authentication using Firebase,{["HTML","CSS","JavaScript","Firebase"].map((tech,key)=>{
        return(
            <span 
            key={key}
            className="text-amber-500 py-1 px-3 rounded-full text-sm 
            hover:bg-amber-500/65 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition">
           {tech}
            </span>
            );
    })}
    </li>
    </div>
    <div className="text-center">
    <a href="https://github.com/mekdes7/Prodigy_FS_UserAuthentication" 
       className="block mt-8  hover:text-amber-500 transition-colors">
       View Project ⇨
    </a>
</div>

</div>
  
    <div className="p-6 rounded-x1 border border-white/10 hover:-translate-y-1 
hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]transition"> 
    <h3 className="text-amber-500 font-bold mb-4"><strong>Employee Management System</strong></h3>
    <p>Ongoing Project</p><p>A software solution for managing employee data, attendance, leave, payroll, and performance. Automates HR tasks, 
        ensures compliance, and boosts productivity through centralized data management and reporting tools.</p>
    <div>{["Tailwind CSS","ReactJs","NodeJs","ExpressJs","MySQL","Postman"].map((tech,key)=>{
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
    <div className="text-center">
    <a href="https://github.com/mekdes7/Prodigy_FS_UserAuthentication" 
       className="block mt-8  hover:text-amber-500 transition-colors">
       View Project ⇨
    </a>
</div>
</div>

</div>
    
</div>
</RevealOnScroll>
    </section>
}