import Link from 'next/link'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"


function Nav() {
  return (
    <div>
      <h1 className="font-bold text-orange-600">Prompt</h1>
      <div className='flex px-2  justify-end gap-5'>
      <Link href="/create-prompt" className={buttonVariants({ variant: "outline" })}>Create a Prompt</Link>
      <Link href="/signup" className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
      </div>
    </div>
  )
}
export default Nav
