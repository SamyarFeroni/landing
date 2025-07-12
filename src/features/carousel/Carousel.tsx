import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="flex justify-center pb-4">
      <Image
        src="../../../public/_assets/images/landing-top-iamgs.jpg"
        alt={"landing-top-image"}
      ></Image>
    </div>
  );
};

export default Carousel;
