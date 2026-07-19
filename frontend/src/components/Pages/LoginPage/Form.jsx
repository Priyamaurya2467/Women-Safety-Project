import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import Footer from '../../Elements/Footer';
import Registration from '../../Registration';
import { useNavigate } from 'react-router-dom'

function Form() {
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")
    }
    const navigate = useNavigate()
  return (
    <>
    <div className='flex justify-center items-center p-10  '>
       
        <div className='w-96 border border-gray-400 rounded-xl p-6 shadow-md hover:shadow hover:shadow-gray-500'>
            <form onSubmit={handlesubmit} className='space-y-6 '>
                <div>
                    <p className='text-xl font-semibold'>Sign in to SafeHer</p>
                    <p className="text-sm text-gray-500">
              Secure access to your safety tools.
            </p>
          </div>

          <div className="flex flex-col">
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
              placeholder="********"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            <button
            onClick={()=>navigate('/dashboard')}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
            <ArrowRight size={18} />
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

          <p className='text-xs text-gray-500 text-center'>
            Don't have an account? 
            <span className='text-blue-500 font-semibold cursor-pointer' onClick={()=>navigate("/registration")}> Sign up</span>
          </p>


                
            </form>

        </div>

        

    </div>

    <Footer/>
    
    
    </>

  )
}
  

export default Form