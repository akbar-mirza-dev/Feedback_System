import { motion } from "framer-motion"

export default function HeartLoader(){

return(

<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">

{/* Aura rings */}

<div className="absolute flex items-center justify-center">

<motion.div
animate={{scale:[1,2], opacity:[0.6,0]}}
transition={{duration:1.5, repeat:Infinity}}
className="absolute w-40 h-40 rounded-full bg-rose-500 blur-xl"
/>

<motion.div
animate={{scale:[1,2.5], opacity:[0.4,0]}}
transition={{duration:1.5, delay:0.4, repeat:Infinity}}
className="absolute w-40 h-40 rounded-full bg-pink-400 blur-xl"
/>

</div>

{/* Heartbeat */}

<motion.div
animate={{scale:[1,1.25,1]}}
transition={{
duration:0.9,
repeat:Infinity,
ease:"easeInOut"
}}
className="text-5xl"
>

❤️

</motion.div>

</div>

)

}