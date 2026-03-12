import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import PhotoSlideshow from "./PhotoSlideshow"
import bgImage from "../assets/rug3.png"
import bgrImage from "../assets/bg.png"
import RosePetals from "./RosePetals"

export default function Letter({onClose}){

const [opened,setOpened] = useState(false)
const [showLetter,setShowLetter] = useState(false)

const message = `"  Today the world celebrates the day the most beautiful soul was born.

Thank you for filling my life with happiness and love.

You are the most precious gift life has given me. "`

const [typed,setTyped] = useState("")

useEffect(()=>{

if(showLetter){

let i=0

const interval=setInterval(()=>{

setTyped(message.slice(0,i))
i++

if(i>message.length){
clearInterval(interval)
}

},40)

return ()=>clearInterval(interval)

}

},[showLetter])

return createPortal(

<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">

{/* ENVELOPE */}

{!showLetter && (

<motion.div
onClick={()=>setOpened(true)}
whileTap={{scale:0.96}}
className="relative w-80 h-52 rounded-xl shadow-2xl cursor-pointer overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-red-600">

{/* PAPER SLIDE */}

<motion.div
initial={{y:60}}
animate={{y: opened ? -130 : 60}}
transition={{duration:1}}
onAnimationComplete={()=> opened && setTimeout(()=>setShowLetter(true),300)}
className="absolute left-4 right-4 h-44 bg-white rounded-lg shadow-xl flex items-center justify-center"
>
<p className="text-gray-700 font-semibold">
A Letter For You 💌
</p>
</motion.div>

{/* FRONT ENVELOPE */}

<motion.div
animate={{rotateY: opened ? -140 : 0}}
transition={{duration:0.8}}
style={{transformOrigin:"left"}}
className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl"
/>

{/* WAX SEAL */}

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-red-700 shadow-xl flex items-center justify-center text-white text-lg">
❤
</div>
</div>

</motion.div>

)}

{/* FULLSCREEN LETTER */}

{showLetter && (

<motion.div
initial={{scale:1.4,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.7}}
className="fixed inset-0 w-screen h-screen overflow-y-auto flex flex-col items-center pt-20 px-6 text-center"
style={{
backgroundImage:`url(${bgImage})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="max-w-md bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl"
style={{
backgroundImage:`url(${bgrImage})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
>
<RosePetals></RosePetals>
<h1 className="text-3xl font-bold text-rose-800 font-serif bg-gradient-to-r from-[crimson]/90 to-[black]/80 bg-clip-text text-transparent mt-4 pt-1">
~Happy Birthday ❤️~
</h1>

<p className="mt-6 text-gray-800 font-mono  leading-relaxed whitespace-pre-line">

{typed}

<span className="animate-pulse">|</span>

</p>

<p className="mt-6 text-rose-500 font-semibold">
Forever yours 🫴
</p>

{/* BACK BUTTON */}
<button
onClick={onClose}
className="mt-12 mb-12 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl shadow-lg"
>
Back to Surprise 🎉
</button>
<h2 className="text-2xl font-semibold font-serif text-[crimson] mb-60">
Some Beautiful Glimpses ✨
</h2>
{/* SLIDESHOW */}
<div className="mt-10 mb-12 w-full flex flex-col items-center">
<PhotoSlideshow/>
</div>
</div>
</motion.div>
)}
</div>,
document.body
)
}