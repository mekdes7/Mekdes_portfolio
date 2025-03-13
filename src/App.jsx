
import { useState } from 'react'
import './App.css'
import { Loading } from './component/Loading'
import './index.css'
import { NavBar } from './component/NavBar';
import { MobileMenu } from './component/MobileMenu';
import { Home } from './component/sections/Home';
import { About } from './component/sections/About';
import { Project } from './component/sections/Project';
import { Contact } from './component/sections/Contact';


function App() {
 const[isloading,setIsloading]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);
  return (
    <>
      {!isloading&&
     <Loading onComplete={()=>setIsloading(true)}/>}{""}
<div className={`min-h-screen transition-opacity duration-700
   ${isloading ? "opacity-100":"opacity-0"}bg-black text-gray-100`}>
<NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Home/>
<About/>
<Project/>
<Contact/>
</div>
    </>
  );
}

export default App
