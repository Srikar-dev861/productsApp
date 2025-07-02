'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Logout = () => {
    const router=useRouter()
      const onClickingBtn = async()=>{
         const url="/api/auth/logout"
         const options={
          method:"POST"
         }
         const response= await fetch(url,options)
         if(response.ok){
             router.push('/login')
    
         }
      }
  return (
    <div>
      <button
                  onClick={onClickingBtn}
                  className="w-full bg-red-600 text-white py-2 font-semibold rounded-b-xl hover:bg-red-700 transition-colors mt-auto"
                >
                  Logout
                </button>
    </div>
  )
}

export default Logout
