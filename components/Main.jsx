'use client'

import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'


const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center bg-transparent'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>        
                <p className='uppercase text-sm tracking-widest text-gray-200'>Yo. I'm a little tagline</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#fff]'>Sarah</span></h1>
                <h1 className='py-4 text-gray-700'>Software Developer</h1>
                <p className='py-4 text-gray-200 max-w-[70%] m-auto'>Blah blah blah.  Here's some text about me and the things that I do and what I'm looking for.  Currently I'm focused on blah blah while also learning blah blah </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-white'>
                <Link href='https://www.linkedin.com/in/sarahsmithvii/' target='_blank' rel='noopener noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400/40 bg-black bg hover:bg-fuchsia-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    </Link>
                    <Link href='https://github.com/sarahvii' target='_blank' rel='noopener noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400/40 bg-black bg hover:bg-fuchsia-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    </Link>
                    <a href="mailto:sarahsmithvii@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400/40 bg-black bg hover:bg-fuchsia-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'> 
                        <AiOutlineMail/>
                    </div>
                    </a>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Main
