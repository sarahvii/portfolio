import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w=full md:h-screen p-2 flex items-center py-16 bg-white'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[--background-start-hex]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Some words about me</p>
                <p className='py-2'>More words woooooooooooooooooo.</p>
                <p className='py-2'>and don&apos;t forget the embarrasing photo.. </p>
                <Link href="/#projects">
                <p className='py-2 text-gray-600 underline cursor-pointer'>Take a look at some of my latest projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto  rounded-full flex items-center justify-center p-1 hover:scale-105 ease-in duration-300'>
                <img className='rounded-full border border-black p-0.1' src="/assets/mecircle.png" alt="/"/>
            </div>
        </div>
    </div>
  )
}

export default About
