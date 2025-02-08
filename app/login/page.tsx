'use client'
import { login } from '@/actions/auth'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  async function signIn() {
    try{
      const user = await login(email, password);
      alert('Login Success');
      localStorage.setItem('token', user);
      localStorage.setItem('email', email);
    }catch(e){
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert(e);
      }
    }
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      window.location.href = '/';
    }
  }, [])

  return (
    <div>
        <div className='w-screen h-[100vh]' style={{backgroundImage: "url('/R-2.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <h1 className='h-[20vh] text-6xl flex justify-center items-center font-bold'>
                        Login
                    </h1>
                </div>
                <div className='w-1/3 h-[40vh] flex justify-center items-start bg-white/30 px-5 border mt-16 pt-12'>
                    <div>
                        <div>
                            <div className='form w-full flex flex-col gap-4 justify-center'>
                               
                                <div>
                                    <label className='m-2 text-xl text-grey-200 font-semibold'>Email : </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='m-2 text-xl text-grey-200 font-semibold'>Password : </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-black/60 text-xl rounded-sm py-2 px-4 mt-6' onClick={signIn}>LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Page
