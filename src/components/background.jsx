import React from 'react'

function background() {
  return (
    <> 
      <div className=' w-full h-screen fixed z-[2]'>
      <div className='flex w-full justify-center text-zinc-600 py-10 absolute top-[10%] text-xl'>Document</div>
      <h1 className='tracking-tighter caret-transparent text-[13vw] leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-bold'>Docs.</h1>
      </div>
      </>
  )
}

export default background
