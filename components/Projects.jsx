import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
    const hikerImg = require('/public/assets/projects/hiker.jpg');


  return (
    <div id='projects' className='mx-auto px-2 py-16 bg-black'>


<div className='max-w-[1240px] m-auto grid md:grid gap-8'>
      <p className='text-xl tracking-widest uppercase text-fuchsia-300'>Projects</p>
      <h2 className='py-4'>Things I've Built</h2>
      </div>

      <div className='max-w-[1240px] m-auto grid md:grid-cols-2 gap-8'>

    <ProjectItem title='Munro Mate' backgroundImg={hikerImg} tech='Python' projectUrl='/munromate'/>
    <ProjectItem title='Phoenix Trader' backgroundImg={hikerImg} tech='React' projectUrl='/phoenixtrader'/>
    <ProjectItem title='JobShark' backgroundImg={hikerImg} tech='Next.js' projectUrl='/jobshark'/>




      </div>
    </div>
  )
}

export default Projects
