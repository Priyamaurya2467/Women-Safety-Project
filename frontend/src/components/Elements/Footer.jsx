import React from 'react'

function Footer() {
  return (
    <>
    <footer className='border-t-1 p-4 border-gray-300 mb-15'>
  

            <div className='flex justify-between'>
                <div>
                    <p className='text-xs text-gray-400'>©2024 SafeHer Technologies. All rights reserved</p>
                </div>
                <div>
                  <div className='text-xs text-gray-400'>
                    <ul className='flex justify-evenly gap-5'>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                      <li>Security</li>
                      <li>Help Center</li>
                    </ul>
                  </div>
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer