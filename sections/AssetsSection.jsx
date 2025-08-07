import React from "react";
import Section from "./Section";
import Image from "@/components/Image";

const AssetsSection = ({
  imageUrl,
  imageW,
  imageH,
  reverse,
  imageAlt,
  item,
}) => {
  return (
    <>
      <section className={``}>
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-4`}>
            <Section {...item} />
            <div
              className={`flex items-center justify-center ${
                reverse ? "lg:order-first order-last" : ""
              }`}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageW}
                height={imageH}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssetsSection;
