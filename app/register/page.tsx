import React from 'react'

const page = () => {
  return (
    <div>
        <div className='w-screen h-[100vh]' style={{backgroundImage: "url('/R-2.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <h1 className='h-[20vh] text-6xl flex justify-center items-center font-bold'>
                        Sign up
                    </h1>
                </div>
                <div className='w-1/3 h-[60vh] flex justify-center items-start bg-white/30 p-5 pt-14 border border-black/30 shadow-sm '>
                    <div>
                        <form>
                            <div className='form w-full flex flex-col gap-4'>
                                <div>
                                    <label className='m-2 text-xl text-grey-200'>Name : </label>
                                    <input
                                        type="name"
                                        id="name"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='m-2 text-xl text-grey-200'>DOB : </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='m-2 text-xl text-grey-200'>Email : </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div>
                                    <label className='m-2 text-xl text-grey-200'>Password : </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className='w-full px-4 py-2 text-black border border-gray-400 rounded'
                                    />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-black/60 text-xl rounded-sm py-2 px-4 mt-6'>SIGN UP</button>
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
