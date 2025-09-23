"use client";
import Image from "next/image";

import img1 from "@/../public/img5.png"
import img2 from "@/../public/img6.png"
import img3 from "@/../public/img7.png"

const PodcastLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-black px-10 lg:py-5 mb-7">
      {/* Top Left */}
      <div className="rounded-3xl overflow-hidden lg:rounded-tr-[10rem] lg:rounded-tl-3xl lg:rounded-bl-[5rem]">
        <Image
          src={img1} // replace with your actual path
          alt="Interview with tripod"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Top Right */}
      <div className="rounded-3xl overflow-hidden lg:rounded-tl-[10rem] lg:rounded-tr-[3rem] lg:rounded-br-[3rem]">
        <Image
          src={img2} // replace with your actual path
          alt="Interview with bookshelf"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom (Full Width) */}
      <div className="col-span-2 rounded-3xl overflow-hidden lg:rounded-tl-[4rem] lg:rounded-bl-[4rem] lg:rounded-tr-[10rem]">
        <Image
          src={img3} // replace with your actual path
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
