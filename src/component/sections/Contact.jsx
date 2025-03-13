import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";


export const Contact=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    });

    
    const handleSubmit=(e)=>{
        e.preventDefault();

emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_ENAIL_TEMPLATE,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
    alert("Message sent!")
    setFormData({name:"",email:"",message:""})
}).catch(()=>{alert("Oops something is wrong please try again!")});
    }
    return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
<RevealOnScroll>
    <div className="px-4 w-110">
<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-200 to-amber-600 
    bg-clip-text text-transparent text-center">Get in Touch</h2>
    <form className="space-y-6" onSubmit={handleSubmit}>
<div className="relative space-y-5">
<input type="text" id="name" name="name" required
value={formData.name}
className="w-full  border border-amber-200 rounded-2xl px-2 py-3 
text-amber-100 transition focus:outline-none focus:bg-amber-500/5 focus:border-amber-500"
placeholder="Name..."
onChange={(e)=>setFormData({...formData,name:e.target.value})}
>
</input>
<input type="email" id="email" name="email" required
value={formData.email}
className="w-full  border border-amber-200 rounded-2xl px-2 py-3 
text-amber-100 transition focus:outline-none focus:bg-amber-500/5 focus:border-amber-500"
placeholder="example@gmail.com"
onChange={(e)=>setFormData({...formData,email:e.target.value})}
>
</input>
<textarea  id="message" name="message" required
value={formData.message}
rows={5}
className="w-full  border border-amber-200 rounded-2xl px-4 py-3 
text-amber-100 transition focus:outline-none focus:bg-amber-500/5 focus:border-amber-500"
placeholder="your Message..."
onChange={(e)=>setFormData({...formData,message:e.target.value})}
>
</textarea>
<button type="submit" className="w-full bg-amber-500/80 font-bold text-white py-3 px-6 rounded-4xl
 transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(159,130,246,0.4)]">Send Message</button>
</div>
    </form>
    </div>
</RevealOnScroll>
    </section>
    );
}