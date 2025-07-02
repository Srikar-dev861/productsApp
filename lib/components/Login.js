'use client'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  
  const [email, setUseremail] = useState('')
  const [passward, setPassward] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const submitForm = async event => {
    event.preventDefault()
    const userDetails={email, passward}
    console.log(userDetails)
    const url="/api/auth/login"
    const options={
      method:"POST",
      body: JSON.stringify(userDetails)
    }
    const response= await fetch(url,options)
    const data = await response.json()
    console.log(data)

    if(response.ok){
      router.push('/')
    }
    setError('Login failed')
  }

  
  
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setUseremail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={passward}
              onChange={e=>setPassward(e.target.value)}
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
