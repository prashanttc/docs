import React , {useRef} from'react'
import Card from './card'

function foreground() {
  const ref = useRef(null);
  const data =  [
    {
        desc:"this is the background color",
        filesize: "9mb",
        close: false,
        tag: {isOpen: true ,tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc:"this is the background color",
        filesize: "9mb",
        close: false,
        tag: {isOpen: true ,tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc:"this is the background color",
        filesize: "9mb",
        close: false,
        tag: {isOpen: true ,tagTitle: "Upload Now", tagColor: "blue" },
    },
];

  return (
    <div  ref={ref} className=' w-full h-screen fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-10'>
      {data.map((item , index)=>(
        <Card data ={item} reference={ref}/> 
      ))}
    </div>
  )
}

export default foreground
