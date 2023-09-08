import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'


function Contact() {
  return (
    <div id="contact" className='w-full lg:h-screen bg-white'>
        <div className='max-w-[1240px] m-auto px-2 py-1 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#008080]'>Contact</p>
            <h2>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>


                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="/"/>
                        </div>
                        <div>
                            <h2 className='py-2'>Sarah Smith</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions.  Get in touch.</p>
                        </div>


                    <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                


                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' id='name' name='name' placeholder='name'/>
                                </div>
                                <div className='flex flex-col'>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' id='number' name='number' placeholder='phone number'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' id='email' name='email' placeholder='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' id='subject' name='subject' placeholder='subject'/>
                            </div>
                            <div className='flex flex-col py-2'>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' id='message' name='message' placeholder='your message'/>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Submit</button>
                        </form>
                    </div>
                    </div>    
            </div>
        </div>
    </div>
  )
}

export default Contact
