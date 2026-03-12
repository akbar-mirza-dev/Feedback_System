import { motion } from "framer-motion"

export default function FloatingHearts(){

const hearts = Array.from({length:12})

return(

<div className="absolute inset-0 pointer-events-none overflow-hidden">

{hearts.map((_,i)=>(

<motion.div
key={i}
initial={{y:400,opacity:0}}
animate={{y:-200,opacity:1}}
transition={{
duration:6,
delay:i*0.5,
repeat:Infinity
}}
className="absolute text-pink-400 text-2xl"
style={{
left:`${Math.random()*100}%`
}}
>

💖


</motion.div>



))}

</div>

)

}