import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
    const hikerImg = require('/public/assets/projects/hiker.jpg');


  return (
    <div id='projects' className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest upppercase text-[#565185]'>Projects</p>
      <h2 className='py-4'>What I've Built</h2>
      <div className='grid md:grid-cols-3 gap-8'>


    <ProjectItem title='Munro Mate' backgroundImg={hikerImg} tech='Python' projectUrl='/munromate'/>
    <ProjectItem title='Phoenix Trader' backgroundImg={hikerImg} tech='React' projectUrl='/phoenixtrader'/>
    <ProjectItem title='JobShark' backgroundImg={hikerImg} tech='Next.js' projectUrl='/jobshark'/>




      </div>
    </div>
  )
}

export default Projects
