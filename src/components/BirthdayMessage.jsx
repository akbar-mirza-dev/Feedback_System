import { motion } from "framer-motion"
import { useState } from "react"
import LoveLetter from "./Letter"

export default function BirthdayMessage(){

const [showLetter,setShowLetter] = useState(false)

return(

<>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">

<div className="bg-white/5 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] ring-1 ring-white/10 p-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1.5}}
className="text-3xl sm:text-4xl font-serif font-bold"
>
Happy Birthday سناء ❤️
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
className="mt-6 text-lg font-mono max-w-md"
>
Today the universe celebrates the most beautiful soul it ever created.
Your smile lights my world and your love makes life magical.
</motion.p>

<button
onClick={()=>setShowLetter(true)}
className="mt-10 bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
>
Open My Letter 💌
</button>

</div>
</div>

{/* FULLSCREEN LETTER */}
{showLetter && <LoveLetter onClose={()=>setShowLetter(false)} />}

</>

)
}