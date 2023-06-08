import logo from "../../public/hill_queen-1.png"
import {motion} from "framer-motion"
import { useState } from "react"
import useMediaQuery from "../util/useMediaQuery"
export default function Nav()
{
    const[toggled,setToggled] = useState(false)
    const matches=useMediaQuery('(min-width:128px)')
    console.log(matches)
    return (
        <nav className="relative mx-12 mb-12 flex justify-between items-center pt-8  pb-0 font-medium md:mx-21 lg:mx-32 ">
            <svg 
                className="absolute bottom-0 left-1/2 -translate-x-1/3"
                width="250" 
                height={6} 
                viewBox="0 0 250 4" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 2L428 2" strokeWidth={2} stroke="#282828" strokeLinecap="round"/>
                    </svg>
                    <div>
                        <img src={logo} className="w-36 h-36 align-top" alt=" profile picture of hua"/>
                    </div>

                    {/*Title*/}
                    <h1 className="text-lg font-bold">
                    <a href="/">Hill Queen</a>
                    </h1>

                    <div onClick={()=>setToggled(prevToggle=>!prevToggle)} className="space-y-1 coursor-pointer xl:hidden">
                        <span className="block h-0.5 w-8 bg-black"></span>
                        <span className="block h-0.5 w-6 bg-black"></span>
                        <span className="block h-0.5 w-4 bg-black"></span>
                    </div>
        </nav>
    )


}