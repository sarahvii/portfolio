import React from 'react'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Footer = () => {
  return (
    <div>
                  <div className='flex justify-center py-10 px-2 bg-white'>
                <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#000]'>
                    <HiOutlineChevronDoubleUp className='text-[#fff] bg-[#000]' size={20}/>
                    </div>
                </Link>
            </div>
    </div>
  )
}

export default Footer
