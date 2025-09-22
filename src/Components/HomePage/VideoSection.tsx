"use client"

import Image from "next/image"
import img1 from "../../../public/gautampodcast 1.png"
import img2 from "../../../public/youtube.png" 

export default function VideoSection() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-12 bg-black flex flex-col items-center">
      
      {/* Character image */}
      <div className="relative flex justify-center items-center w-full mb-8">
        <Image
          src={img1}
          alt="Character"
          width={500}
          height={400}
          className="object-contain w-[220px] md:w-[400px] lg:w-[500px]"
          priority
        />
      </div>

      {/* Mobile: Single video */}
      <div className="block md:hidden w-full">
        <div className="w-full border border-white rounded-2xl overflow-hidden relative -mt-25">
          <Image
            src={img2}
            alt="Video"
            width={1200}
            height={400}
            className="object-contain w-full rounded-xl"
            priority
          />

          {/* Play button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-16 h-16 rounded-full bg-red-600 flex items-center justify-center border-4 border-white shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Stacked videos */}
      <div className="hidden md:block">
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
        <div className="max-w-[76rem] flex flex-col blur-xs -px-2 items-center justify-center relative ml-10 -mt-155 border-1 border-white rounded-3xl z-10">
          <Image
            src={img2}
            alt="Videos"
            width={1200}
            height={400}
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-[70rem] flex flex-col blur-xs -px-2 items-center justify-center relative ml-18 -mt-140 border-1 border-white rounded-3xl">
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
