import React from 'react'
import { Mail, Phone, MapPinHouse, Send, Linkedin } from 'lucide-react'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
// text-[#0f1729]
// text-[#7969C9]

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleMail = (e) => {
        e.preventDefault()

        const serviceId ="service_wneny4t"
        const templateId = "template_x09pswc" 
        const publicKey = "k4X5q1W7gHfownCbV"

        const templateParams = {
            from_name: name,
            email: email,
            from_message: message,
            time: Date(),
        };

        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then( (response) => {
            alert("Email Send Successfully..!!")
            setName("")
            setMessage("")
            setEmail("")
        } )
        .catch( (error) => {
            console.log("Error in mail",error)
        } );
    }

  return (
    <div className='flex flex-col lg:h-210 md:h-210 h-520'>
        <div className='flex flex-row justify-center lg:mt-25 md:mt-20 mt-200 '>
            {/* Heading */}  
            <span className='text-[#0f1729] text-4xl mx-2 font-bold'>Get In</span>
            <span className='text-[#7969C9] text-4xl font-bold'>Touch</span>
        </div>
        <div className='flex mt-4 justify-center'>
            <p className='md:w-160 w-100 text-[#0f1729] font-medium text-center'>Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities</p>
        </div>
        <div className='flex flex-col md:flex-row mt-20 mx-auto'>
            <div className='flex flex-col lg:w-120 md:50 lg:mx-30 md:mx-2'>
                {/* Left Section */}
                <span className='text-[#0f1729] text-2xl font-bold text-center'>Contact Information</span>
                <div className='flex flex-row mx-auto md:mx-0 mt-10'>
                    <Mail className='text-[#7969C9] rounded-full w-10 h-10 p-2 bg-[#a59ec5]'/>
                    <div className='flex flex-col mx-4'> 
                        <span className='text-start font-medium'>Email</span>
                        <span className="text-start font-medium">saumaygupta03@gmail.com</span>
                    </div>
                </div>
                <div className='flex flex-row justify-start mx-auto md:mx-0 mt-10'>
                    <Phone className='text-[#7969C9] rounded-full w-10 h-10 p-2 mr-4 md:mr-0 bg-[#a59ec5]'/>
                    <div className='flex flex-col justify-start mr-27 md:mr-0 md:mx-4'> 
                        <span className=' text-start font-medium w-20'>Phone</span>
                        <span className="font-medium">+919027100838</span>
                    </div>
                </div>
                <div className='flex flex-row justify-start mx-auto md:mx-0 md:justify-start mt-10'>
                    <MapPinHouse className='text-[#7969C9] rounded-full w-10 h-10 mr-4 md:mr-0 p-2 bg-[#a59ec5]'/>
                    <div className='flex flex-col mr-22  md:mr-0 md:mx-4'> 
                        <span className='font-medium'>Location</span>
                        <span className="font-medium">Greater Noida, U.P</span>
                    </div>
                </div>
                <div className='flex flex-row mt-12 md:mt-30'>
                    <div className='flex flex-col mx-6 justify-center w-full'> 
                        <span className='text-center font-medium'>Connect With Me</span>
                        <div className='flex flex-row justify-center mt-3'>
                            <a href="https://www.linkedin.com/in/saumay-gupta-23a686259/"><Linkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-white mt-20 md:mt-0 lg:w-120 md:w-100 w-100 mx-auto rounded-xl'>
                <div className='p-5 flex flex-col justify-center'>
                    <span className='text-[#0f1729] text-2xl font-bold text-center'>Send a Message</span>
                    <form onSubmit={handleMail} className='flex flex-col'>
                        <span className='text-[#0f1729] text-center mt-6 font-medium'>Your Name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='write your name..' className='bg-[#dbdee5] p-3 rounded mt-2' required={true}/>
                        <span className='text-[#0f1729] text-center mt-6 font-medium'>Your Email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='write your email..' className='bg-[#dbdee5] p-3 rounded mt-2' required={true}/>
                        <span className='text-[#0f1729] text-center mt-6 font-medium'>Your Message</span>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" cols="50" placeholder="Hello, I'd like to talk about.." className='bg-[#dbdee5] p-3 rounded mt-2 resize-none' required={true}></textarea>
                        <div className='w-full bg-[#7969C9] mt-10 rounded-2xl justify-center'>
                            <button type="submit" className='flex flex-row p-2 w-full justify-center text-white font-medium hover:shadow-2xl hover:bg-[#5f5788] rounded-2xl'>Send Message <Send className='mx-2'/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
