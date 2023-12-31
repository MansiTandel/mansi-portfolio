import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'

import {BsInstagram} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id : 1,
            child: (
                <>
                LinkedIn <FaLinkedin size= {30} />
                </>
            ),
            href:'https://linkedin.com/in/mansi-tandel/',
            style:'rounded-tr-md bg-gradient-to-r from-blue-500 to-blue-400'
        },
        {
            id : 2,
            child: (
                <>
                GitHub <FaGithub size= {30} />
                </>
            ),
            href:'https://github.com/MansiTandel',
            style:'bg-gray-500'
        },
        {
            id : 3,
            child: (
                <>
                Email <HiOutlineMail size= {30} />
                </>
            ),
            href:'mailto:mansitandel1998@gmail.com',
            style:'bg-gradient-to-r to-green-500 from-green-400'
           
        },
        {
            id : 4,
            child: (
                <>
                Instagram <BsInstagram size= {30} />
                </>
            ),
            href:'https://instagram.com/mansi_0106',
            style:'rounded-br-md bg-gradient-to-r to-pink-600 from-blue-400'
        }

    
        
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, style}) => (
            <li key = {id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500" +style}>
                <a href={href}
                 className='flex justify-between items-center w-full
                 text-white' target="_blank" rel="noreferrer">
                {child}    
                
                </a>
            </li>

        ))}






        
      </ul>
    </div>
  )
}

export default SocialLinks
