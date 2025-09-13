import Image from "next/image";
import group from "../../../public/Group.png";

export default function StudioPage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
      {/* Full image, no cropping */}
      <Image
        src={group}
        alt="Full image"
        fill
        priority
        className="object-contain object-center"
      />
    </section>
  );
}
