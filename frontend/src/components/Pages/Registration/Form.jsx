import React from 'react'
import { ArrowRight } from 'lucide-react';
import Footer from '../../Elements/Footer';
import Logo from '../../Elements/Logo';
import { useNavigate } from 'react-router-dom';
function Form() {

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        
        e.preventDefault();
        console.log("Form submitted")
    }
    
  return (
    <>
    <Logo/>
    
    
  
    <div className='flex justify-center items-center p-10  '>
       
        <div className='w-96 border border-gray-400 rounded-xl p-6 shadow-md hover:shadow hover:shadow-gray-500'>
            <form onSubmit={handlesubmit} className='space-y-6 '>
                <div>
                    <p className='text-xl font-semibold'>Create your account</p>
                    <p className="text-sm text-gray-500">
                        Join SafeHer to start your safety journey.
                    </p>
                </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="border-2 border-gray-300 text-gray-200  rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
            />
          

          <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="border-2 border-gray-300 text-gray-200  rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div className="flex flex-col">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="*******"
              minLength={8}
              className="border-2 border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className='text-xs pt-2 text-gray-300'>Must be at least 8 characters.</span>
          </div>
            <button
            onClick={()=>navigate('/dashboard')}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
            
          </button>

          <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-3 text-xs text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <button
            onClick={() => window.location.href = "https://www.google.com"}
            className="w-full flex items-center justify-center gap-2 font-medium text-xs py-2 rounded-lg transition border-2 border-gray-200 hover:bg-purple-50"
          >
            <div className='flex gap-2'>
            <img src="https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg" alt="" className='w-5'/> 
            Continue with Google
            
            </div>
          </button>

          <p className='text-xs text-gray-500 text-center '>
            Already have an account? 
            <span className='text-blue-500 font-semibold cursor-pointer' onClick={()=>navigate('/')}> Sign in</span>
          </p>


                
            </form>

        </div>

        

    </div>

    <Footer/>
    
    
    
    </>
  )
}

export default Form