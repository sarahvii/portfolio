import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 bg-black'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[--background-start-hex]'>Skills</p>
            <h2 className='py-4 text-white'>Things I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/html.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/css.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/javascript.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/react.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/nextjs.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>Next.js</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/node.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>Node.js</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/mongo.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/tailwind.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/github1.png'alt='/' width='64' height='64'/>
                    </div>
                    <div className='flex felx-col items-center justify-center'>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skills
