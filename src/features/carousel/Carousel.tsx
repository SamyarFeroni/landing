import Image from "next/image";

export default function Carousel() {
  return (
    <div className="w-full relative h-[300px] md:h-[500px] lg:h-[600px]">
      <Image
        src="/_assets/images/landing-top-images.jpg"
        alt="landing-top-image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
