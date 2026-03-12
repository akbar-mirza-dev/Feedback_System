import { motion } from "framer-motion"

export default function RosePetals(){

const petals = Array.from({length:15})

return(

<div className="absolute inset-0 pointer-events-none overflow-hidden">

{petals.map((_,i)=>(

<motion.div
key={i}
initial={{y:-100,opacity:0}}
animate={{y:"110vh",opacity:1,rotate:360}}
transition={{
duration:8,
delay:i*0.6,
repeat:Infinity
}}
style={{left:`${Math.random()*100}%`}}
className="absolute text-pink-400 text-2xl"
>

🍁

</motion.div>

))}

</div>

)
}