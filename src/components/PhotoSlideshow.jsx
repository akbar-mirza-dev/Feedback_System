import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

import photo1 from "../assets/photos/photo1.jpg"
import photo2 from "../assets/photos/photo2.jpg"
import photo3 from "../assets/photos/photo3.jpg"

export default function PhotoSlideshow(){

const photos=[photo1,photo2,photo3]

return(

<div className="absolute bottom-12 w-full flex justify-center px-6">

<div className="w-full max-w-sm">

<Swiper
modules={[Autoplay]}
autoplay={{delay:2500}}
loop={true}
spaceBetween={20}
>

{photos.map((p,i)=>(
<SwiperSlide key={i}>

<div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">

<img
src={p}
alt="memory"
className="w-full h-64 object-cover"
/>

</div>

</SwiperSlide>
))}

</Swiper>

</div>

</div>

)

}