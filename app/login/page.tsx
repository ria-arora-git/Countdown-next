import React from 'react'

const page = () => {
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
                        <form>
                            <div className='form w-full flex flex-col gap-4 justify-center'>
                               
                                <div>
                                    <label className='m-2 text-xl text-grey-200 font-semibold'>Email : </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='m-2 text-xl text-grey-200 font-semibold'>Password : </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-black/60 text-xl rounded-sm py-2 px-4 mt-6'>LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default page
