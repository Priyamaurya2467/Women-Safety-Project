import { User2Icon } from 'lucide-react'
import React, { Profiler } from 'react'

function Main() {
  return (
    <>
        <header className='flex items-center justify-between p-4'>

        <div>
            <h2 className='text-xl font-semibold'>Live Map</h2>
        </div>
        
            <ul>


                
                <li className='flex items-center gap-2'>
                   
                    <User2Icon size={20}/> 
                    <span>Jane Cooper</span>
                    
                </li>
                  
            </ul>
        

        </header>
    
    
    </>
  )
}

export default Main