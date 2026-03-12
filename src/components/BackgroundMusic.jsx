import { useEffect, useRef } from "react"
import music from "../assets/music.mp3"

export default function BackgroundMusic(){

const audioRef = useRef(null)

useEffect(()=>{

audioRef.current.volume = 0.5
audioRef.current.play()

},[])

return(

<audio
ref={audioRef}
src={music}
loop
/>

)

}