import { HelpCircle, Search } from 'lucide-react'
import React from 'react'
import { MdNotificationAdd } from 'react-icons/md'

function Navbar() {
  return (
    <header className='flex justify-end p-4'>

            <ul>
                <li className='flex items-center gap-10'>
                   
                    <div className='flex bg-gray-200 border-1 text-gray-300 gap-3 items-center p-2 py-3 px-5 rounded-2xl'>
                        <Search size={15} className='text-blue-700'/><input type="text" className=' text-sm text-gray-900 font-medium' placeholder='Search trips...' />
                    </div>
                    
                    <MdNotificationAdd className='text-gray-600'/>
                    <HelpCircle className='text-gray-600' size={15}/>

                    <div className='bg-yellow-300 h-10 w-10 rounded-2xl mr-5'>

                    </div>
                    
                </li>
                  
            </ul>
        

        </header>
  )
}

export default Navbar