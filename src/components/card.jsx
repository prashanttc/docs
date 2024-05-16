import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function card({data , reference}) {
  return (
    <motion.div
     drag
     dragConstraints={reference}
     whileDrag={{scale : 1.1}}
     dragElastic={.1}
     dragTransition={{bounceStiffnes : 100 , bounceDamping: 201}}
     className='w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 relative overflow-hidden '>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-light'>{data.desc}</p>
        <div className='absolute footer bottom-0 w-full h-13 left-0 pt-2'>
            <div className='flex items-center justify-between px-6 mb-5'>
                <h5>{data.filesize}</h5>
                <span className='flex w-7 h-7 items-center rounded-full bg-zinc-600 justify-center'>
                    {data.close ? <IoMdClose/> :  <MdOutlineFileDownload size=".8em" color='#fff'/>}
                     </span>
           
            </div>
            {data.tag.isOpen && (<div className={`tag w-full h-12 ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center py-4`}>
                <h3 className='text-sm'>{data.tag.tagTitle}</h3>
            </div>)}
            
        </div>
    </motion.div>
    
  )
}

export default card
