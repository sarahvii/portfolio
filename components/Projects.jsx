import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
    const hikerImg = require('/public/assets/projects/hiker.jpg');
    const munroMate1Img = require('/public/assets/projects/munromate1.png')


  return (
    <div id='projects' className='mx-auto px-2 py-16 bg-transparent'>


<div className='max-w-[1240px] m-auto grid md:grid gap-8'>
      <p className='text-xl tracking-widest uppercase text-fuchsia-300'>Projects</p>
      <h2 className='py-4'>Things I&apos;ve Built</h2>
      </div>

      <div className='max-w-[1240px] m-auto grid md:grid-cols-2 gap-8'>

    <ProjectItem title='Munro Mate' backgroundImg={munroMate1Img} tech='Python / Flask / PostgreSQL' projectUrl='/munromate'/>
    <ProjectItem title='Phoenix Trader' backgroundImg={hikerImg} tech='React' projectUrl='/phoenixtrader'/>
    <ProjectItem title='JobShark' backgroundImg={hikerImg} tech='Next.js' projectUrl='/jobshark'/>




      </div>
    </div>
  )
}

export default Projects
