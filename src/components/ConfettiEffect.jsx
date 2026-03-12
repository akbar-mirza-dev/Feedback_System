import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function ConfettiEffect(){

useEffect(()=>{

confetti({
particleCount:120,
spread:80,
origin:{y:0.6}
})

},[])

return null
}