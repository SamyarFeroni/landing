import Image from "next/image";
import React from "react";
import TopImage from "../../../public/_assets/images/landing-top-iamgs.jpg";

const Carousel = () => {
  return (
    <div className="flex justify-center pb-4">
      <Image src={TopImage} alt={"landing-top-image"}></Image>
    </div>
  );
};

export default Carousel;
