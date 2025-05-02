import { RevealOnScroll } from '../RevealOnScroll';

export const Project = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-amber-600 
              bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-amber-500 font-bold mb-4">
                <strong>Social Media web app</strong>
              </h3>

              <p className="text-sm text-gray-300">
             Built a social media-style web application using React, TypeScript, Supabase, 
             and Vercel. Implemented features like user authentication, 
             real-time threaded comments, optimistic UI updates, and responsive design.
             
              
              </p>
            

              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "ReactJs","TypeScript"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                          
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="text-center mt-6">
              {/* <a  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65 mb-4" href='https://social-media-web-app-flame.vercel.app/'>View Live</a> */}
                <a href="https://github.com/mekdes7/Social-Media-Web-app"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                  View Source Code ⇨
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-amber-500 font-bold mb-4">
                <strong>User Authentication System</strong>
              </h3>
              <p className="text-sm text-gray-300">
                Two full-stack user authentication systems built with Firebase and MongoDB.
              </p>

              <div className="mt-4">
                <p className="font-semibold text-gray-200">MERN Stack Authentication:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Tailwind CSS", "ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Postman"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-200">Firebase Authentication:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["HTML", "CSS", "JavaScript", "Firebase"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="text-center mt-6">
                <a href="https://github.com/mekdes7/Prodigy_FS_UserAuthentication"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                  View Source Code ⇨
                </a>
              </div>
            </div>


            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-amber-500 font-bold mb-4">
                <strong>Book Store</strong>
              </h3>

              <p className="text-sm text-gray-300">
                A software solution for managing Book Store. it has CRUD for books.
                and for future it will have a user Authentication, Advanced Book Management,Rating and Review System,
                and Book Search and Filter.
              </p>


              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "ReactJs", "NodeJs", "ExpressJs", "Postman"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="text-center mt-6 flex flex-row gap-2">
                {/* <a href="https://bookstore-sirh.onrender.com/"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65"
                  View Project ⇨
                </a> */}
                <a href="https://github.com/mekdes7/BookStore"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                  View Source Code ⇨
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-amber-500 font-bold mb-4">
                <strong>Spotify Clone</strong>
              </h3>

              <p className="text-sm text-gray-300">
                mimic Spotify's UI and functionality using ReactJs and Tailwind CSS.
              </p>


              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "ReactJs"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="text-center mt-6">
                <a href="https://github.com/mekdes7/Spotify-Clone"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                  View Source Code ⇨
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-amber-500 font-bold mb-4">
                <strong>Landing Page</strong>
              </h3>

              <p className="text-sm text-gray-300">
                A responsive, dynamic and interactive landing page built with ReactJs and Tailwind CSS.
              </p>


              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "ReactJs"].map((tech, key) => (
                    <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="text-center mt-6 flex flex-row gap-2">
               
                <a href="https://github.com/mekdes7/Alpharithm_Landing_page"
                  className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                  View Source Code ⇨
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-3xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-amber-600 
              bg-clip-text text-transparent text-center">
                UI/UX Design Projects
              </h5>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-amber-500 font-bold mb-4">
                  <strong>Book Store </strong>
                </h3>
                <p className="text-sm text-gray-300">
                A UI/UX design for a Book Store web app with different roles for Authors and Readers. Authors can do CRUD operations for books, and readers can read a book online 
                  and it also has a user Authentication, Advanced Book Management, Rating and Review System, 
                  and Book Search and Filter.
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {["Figma"].map((tech, key) => (
                      <span key={key} className="bg-amber-500/20 text-amber-500 py-1 px-3 rounded-full text-xs md:text-sm 
                        hover:bg-amber-500/65 hover:text-white transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-6 flex flex-row gap-2">
                  <a href="https://www.figma.com/proto/QgwW3h1TNId4O3PiuUsRle/BookStore?node-id=3-5&p=f&t=KH8BOPwiFCNkyJ9c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=323%3A38"
                    className="block rounded-3xl w-50 h-7 hover:text-amber-500 hover:bg-white transition bg-amber-500/65">
                    Visit ⇨
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
