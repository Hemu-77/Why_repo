"use client";
import Image from "next/image";

import img1 from "@/../public/img5.png"
import img2 from "@/../public/img6.png"
import img3 from "@/../public/img7.png"

const PodcastLayout = () => {
  return (
    <div className="grid grid-cols-11 gap-4 p-4 bg-black px-10 lg:py-5 mb-7">
      {/* Top Left */}
      <div className="col-span-6 overflow-hidden lg:rounded-tr-[150px] lg:rounded-tl-[60px] lg:rounded-bl-[60px]">
        <Image
          src={img1} 
          alt="Interview with tripod"
          width={800}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Top Right */}
      <div className="col-span-5 overflow-hidden lg:rounded-tl-[150px] lg:rounded-tr-[60px] lg:rounded-br-[60px]">
        <Image
          src={img2} 
          alt="Interview with bookshelf"
          width={200}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom (Full Width) */}
      <div className="col-span-12 overflow-hidden lg:rounded-tl-[60px] lg:rounded-bl-[60px] lg:rounded-tr-[150px]">
        <Image
          src={img3} 
          alt="Close-up with plant background"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PodcastLayout;
