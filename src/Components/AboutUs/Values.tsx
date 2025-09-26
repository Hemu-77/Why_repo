"use client";

import Image from "next/image";
import step1Img from "@/../public/Sitting.png"; // replace with your actual asset
import step2Img from "@/../public/Sitting.png";
import step3Img from "@/../public/Sitting.png";
import step4Img from "@/../public/Sitting.png";

export default function ValuesSection() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-7xl md:text-[22rem] font-black bg-gradient-to-t from-red-600 to-white bg-clip-text text-transparent">
          VALUES
        </h2>
        <p className="text-2xl md:text-7xl font-semibold mt-4 ">
          Our 4 Stage Process
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-32">
        {/* Step 1 */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full border border-red-500 text-red-500 mb-4">
              Step 1
            </span>
           <div className="max-w-2xl">
           <h3 className="text-2xl font-bold mb-4 ml-24 -mt-12">UNDERSTANDING CLIENT NEEDS</h3>
            <p className="text-gray-300 leading-relaxed ml-24">
              We start by really getting to know our clients, digging into what keeps them up at night.
              By listening carefully and asking the right questions, we uncover their pain points and
              challenges. This deep understanding forms the bedrock of our partnership, ensuring that
              our solutions are perfectly tailored to their needs.
            </p>
           </div>
          </div>
          
        </div>

       

        {/* Step 2 */}
        <div className="relative flex flex-col items-center gap-8 md:flex-row-reverse">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full border border-red-500 text-red-500 mb-4">
              Step 2
            </span>
            <h3 className="text-2xl font-bold mb-4">CRAFTING PERSONALIZED STRATEGIES</h3>
            <p className="text-gray-300 leading-relaxed">
              Armed with insights from Stage 1, we roll up our sleeves and start brainstorming.
              We craft customized plans and strategies, carefully tailored to address each client’s
              unique situation. Our goal? To map out a clear path to success that aligns perfectly
              with their objectives and vision.
            </p>
          </div>
          <div className="flex-1 relative h-72 w-full">
            <Image src={step2Img} alt="Step 2" fill className="object-contain" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full border border-red-500 text-red-500 mb-4">
              Step 3
            </span>
            <h3 className="text-2xl font-bold mb-4">BRINGING IDEAS TO LIFE</h3>
            <p className="text-gray-300 leading-relaxed">
              With our strategy locked in, it’s time to bring it to life. Our team of creative minds
              gets to work, weaving magic behind the scenes. From concept to execution, we pour our
              hearts into every detail, ensuring that the final product is nothing short of exceptional.
            </p>
          </div>
          <div className="flex-1 relative h-72 w-full">
            <Image src={step3Img} alt="Step 3" fill className="object-contain" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full border border-red-500 text-red-500 mb-4">
              Step 4
            </span>
            <h3 className="text-2xl font-bold mb-4">SPREADING THE WORD</h3>
            <p className="text-gray-300 leading-relaxed">
              As the project nears completion, we shift gears to focus on distribution. We pull out all
              the stops to ensure that our client’s message reaches as many people as possible. Through
              targeted marketing and savvy promotion, we amplify their reach, making sure their voice is
              heard loud and clear in a crowded digital world.
            </p>
          </div>
          <div className="flex-1 relative h-72 w-full">
            <Image src={step4Img} alt="Step 4" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
