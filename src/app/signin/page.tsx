import React from 'react'
// import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'



export default function SignIn() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      {/* signUp section */}
      <div className="w-3/5 p-5">
        <div className='font-bold text-left'>Prompt</div>
        <div className='py-10'>
          <h2 className='text-2xl font-bold text-green-900 mb-2'>Sign in to Account</h2>
        </div>


        <div className="flex flex-col items-center mb-3">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <input type="email" name="email" placeholder="Enter your Email" className='bg-gray-100 outline-none text-sm flex-1' />
          </div>  
        </div>

        <div className="flex flex-col items-center mb-3">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <input type="password" name="password" placeholder="Enter your Password" className='bg-gray-100 outline-none text-sm flex-1' />
          </div>

         <div className="flex w-64 mb-5">
          <label className="flex text-center text-xs"><input type="checkbox" className="mr-2" name="Remember"/>Remember me</label>
         </div>

         <Link href="/signin" className={ buttonVariants({ variant: "default" })}>Sign in</Link>
        </div>
       
        </div>
      {/* end */}
      {/* right section */}
      <div className="w-3/5 bg-green-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <h2 className="text-3xl font-bold mb-2">Hello</h2>
        <div className='border-2 w-10 border-white inline-block mb-2'></div>
        <p className='mb-2'>Fill up personal information and start Prompt with us</p>

        <p className="text-sm text-white">Don't Have An Account<Link href="/signin" className={ buttonVariants({ variant: "link" })}>Sign Up</Link></p>


        </div>
      {/* end right section */}
    </div>

    </div>
  )
}
