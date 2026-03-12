import { motion } from "framer-motion"

export default function MagicParticle(){

const particles = Array.from({length:20})

return(

<div className="absolute inset-0 pointer-events-none">

{particles.map((_,i)=>(

<motion.div
key={i}
initial={{opacity:0}}
animate={{opacity:[0,1,0]}}
transition={{
duration:4,
delay:i*0.3,
repeat:Infinity
}}
style={{
top:`${Math.random()*100}%`,
left:`${Math.random()*100}%`
}}
className="absolute w-2 h-2 bg-pink-300 rounded-full blur-sm"
/>

))}

</div>

)
}