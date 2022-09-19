import React from "react";
export default function Register(){
    return <div className="min-h-screen  bg-gradient-to-br from-red-900 via-black to-gray-500 flex  justify-center items-center pl-2 ">
        <div className=" bg-white/50  rounded-xl  sm:w-full lg:w-3/4  flex flex-col sm:flex-row h-fit ">
        
            <div className="sm:w-1/2 sm:pb-4 bg-[url('./images/form.jpg')] bg-cover rounded-t-xl  sm:flex flex-col "  >
                <h2 className="sm:text-3xl text-xl mb-1 font-bold font-serif text-center rounded-t-xl lg:rounded-tl-xl  bg-gradient-to-tr  py-1 text-gray-200">
                    Registry.io</h2>
                    <p className="text-white px-2 text-lg font-mono overflow-hidden">
                        Registry.io is a platform made to help people finding each other online.
                        Connect with friends of different cultures and share the experiences.
                        Searching the right person for a job in your area ? There will be no worry 
                        Registry.io is best place to find people respective to their profession and Location. </p>
            </div>

            <div className="sm:w-1/2 flex flex-col  sm:p-3 px-3 pb-2 mt-1 sm:pt-1 justify-between  text-md">
                <h2 className="sm:text-2xl text-xl sm:hidden font-bold font-serif text-center bg-gradient-to-tr rounded-lg py-1 text-gray-200">
                    Registry.io</h2>
                <h2 className="text-xl sm:text-2xl fotn-serif font-extrabold text-red-900">Register Here</h2>
                <p className="text-md mt-1 font-bold text-white-900 outline-2 outline-white">Create your  free account.</p>
               <input type="email" placeholder="Email"
                className=" border-2 mt-1 border-gray-400 text-md p-1 outline-none 
                focus:border-black-900 rounded-md focus:shadow-lg focus:shadow-black transition ease-in-out duration-1000"></input>
                    <input type="name" placeholder="First Name" className="focus:shadow-lg focus:shadow-black transition ease-in-out duration-1000  hover:border-black/70  border-2 border-gray-400 w-3/4 text-md p-1 outline-none 
                focus:border-black-900 mt-1 rounded-md" ></input>
                    <input type="name" placeholder="Last Name" className="border-2 border-gray-400 w-3/4 text-md p-1 outline-none 
                focus:border-black-900 mt-1 rounded-md focus:shadow-lg focus:shadow-black transition ease-in-out duration-1000" ></input>
                 <input placeholder="Date Of Birth"  type="date" className="border-2 border-gray-400 w-3/4 text-md p-1 outline-none 
                focus:border-black-900 rounded-md mt-1 accent-pink-900 focus:shadow-lg focus:shadow-black transition ease-in-out duration-1000" />                
                <div className="flex">
                <input type="checkbox" className="accent-black mt-1 hover:accent-pink-600 hover:outline-black hover:outline-4 inline mr-1"/>
                <p className="text-md mt-1 font-mono">I accept the <span className="text-red-900 font-bold hover:text-white">term of use</span> and <span className="text-red-900 font-bold hover:text-white">privacy policy.</span></p>
                </div>
                
                <button className="bg-red-900 font-bold text-white rounded-xl py-1 hover:shadow-lg hover:shadow-black transition ease-in-out duration-1000">Register me</button>
            </div>
        </div>
=
    </div>
}