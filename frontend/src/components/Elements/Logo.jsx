import React from 'react'
import { ShieldCheck } from 'lucide-react'

function Logo() {
  return (
    <>
    <div className='flex flex-col text-center items-center p-3'>
      <div className='bg-blue-700 p-2 rounded-xl w-10 flex flex-col items-center'>
        <ShieldCheck size={20} color='white' strokeWidth={2.5}/>
      </div>
      <h5 className='mt-3 text-xl font-bold text-blue-700'>SafeHer</h5>
    </div>
    </>
  );
}

export default Logo