import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";


const Sociallinks = () => {
  const links = [
    {
      id:1,
      child:(
                    <>
                        Github <FaGithub size={30} />
                    </>
      ),
      href:'https://github.com/'
    },
    {
      id:2,
      child:(
                    <>
                        Linkedin <FaLinkedin size={30} />
                    </>
      ),
      href:'https://www.linkedin.com/'
    },
    {
      id:3,
      child:(
                    <>
                        Mail <IoMdMail size={30} />
                    </>
      ),
      href:'mailto:raj223958@gmail.com'
    },
    {
      id:4,
      child:(
                    <> 
                        Resume <IoDocumentAttachOutline size={30} />
                    </>
      ),
      href:'',
      download:true,
    }
  ]
  return (
    <>
      <div className='flex flex-col top-[35%] left-0 fixed'>
          <ul>
              {
                 links && links.map((social)=>{
                  return(
                    <li key={social.id}
                     className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px]
                      hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
              
                <a href={social.href} className='flex justify-between items-center w-full text-white '
                  download={social.download}
                  target='_blank'
                >
                    <>
                       {social.child}
                    </>
                </a>

              </li>
                  )
                 })
              }
          </ul>
         
      </div>
    </>
  )
}

export default Sociallinks