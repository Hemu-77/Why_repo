"use client"

import Image from "next/image"
import img1 from "../../../public/gautampodcast 1.png"
import img2 from "../../../public/youtube.png" 


export default function VideoSection(){
    return(
        <section className="px-20 py-16 bg-black flex flex-col -z-20">
            <div className="relative flex flex-col justify-center items-center">
            <Image
            src={img1}
            alt="Character"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
            </div>
          <div>
          <div className="max-w-9xl backdrop-blur relative px-5 py-5 -mt-50 border-1 border-white rounded-3xl z-20">
  <Image
    src={img2}
    alt="Videos"
    width={1350}
    height={400}
    className="object-contain"
    priority
  />
</div>
<div className="max-w-[76rem] flex flex-col blur-xs -px-2 items-center justify-center relative ml-10 -mt-155 ml- border-1 border-white rounded-3xl z-10">
  <Image
    src={img2}
    alt="Videos"
    width={1200}
    height={400}
    className="object-contain"
    priority
  />
</div>
<div className="max-w-[70rem] flex flex-col blur-xs -px-2 items-center justify-center relative ml-18 -mt-140 ml- border-1 border-white rounded-3xl">
  <Image
    src={img2}
    alt="Videos"
    width={1200}
    height={400}
    className="object-contain"
    priority
  />
</div>

<div className="relative flex items-center justify-center -mt-50 z-30">
  {/* Blurred Circle */}
  <div className="absolute w-50 h-50 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 shadow-lg"></div>

  {/* Inner Circle (Play Button Background) */}
  <div className="relative w-38 h-38 rounded-full bg-red-600 flex items-center justify-center border-4 border-white shadow-xl">
    {/* Play Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className="w-20 h-20"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
</div>

          </div>


        </section>
    )
}