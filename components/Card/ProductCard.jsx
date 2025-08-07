"use client";
import React from "react";
import { Heading5, Paragraph } from "../Typography";
import Image from "../Image";

function ProductCard({ data }) {
  return (
    <div className="rounded-lg bg-white shadow-sm hover:shadow-md transition p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Heading5
            blackHeading={data?.title}
            className="!text-secondary !mb-0"
          />
          <Paragraph blackText1={data?.model} className="!text-gray-600" />
        </div>
        <div className="text-right">
          <Heading5
            blackHeading={`AED ${data?.price}`}
            className="!text-secondary !mb-0"
          />
          <Paragraph blackText1="/day" className="!text-gray-600" />
        </div>
      </div>

      <div className="aspect-[301/236] w-full relative overflow-hidden rounded-md mb-4">
        <Image
          src={data?.imageUrl}
          alt={data?.title}
          fill
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <div className="mb-2 text-sm text-gray-600 flex flex-wrap">
        {data?.tags?.map((item, i) => {
          let tagClass = "bg-gray-100 text-black";
          if (item === "Available") tagClass = "bg-secondary text-white";
          else if (item === "Unavailable") tagClass = "bg-gray-300 text-black";
          else if (item.includes("Unit")) tagClass = "bg-gray text-secondary";
          else if (item === "Maintenance") tagClass = "bg-[#B8FFD8] text-black";
          return (
            <span
              key={i}
              className={`inline-block px-3 py-1 rounded-md text-sm mr-2 mb-2 ${tagClass}`}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {data?.features?.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {typeof item.icon === "string" ? (
              <Image src={item.icon} alt="icon" width={30} height={30} />
            ) : (
              item.icon
            )}
            <Paragraph
              className="!font-[400] !text-secondary"
              blackText1={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
