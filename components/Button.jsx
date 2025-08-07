import { Icon } from "@iconify/react";
import React from "react";

const Button = ({
  children,
  loading,
  variant,
  className,
  arrowr,
  bggray,
  arrow,
  ...other
}) => {
  return (
    <button
      className={`displayAnchor group border py-2 rounded-md hover:cursor-pointer transition-all duration-500 flex items-center justify-center gap-3 
        ${arrowr ? "md:!px-0 md:!pl-4 !pl-4 md:!pr-2 !pr-2" : "sm:px-6 px-4 sm:py-3 py-2" }
        ${
          variant === "primary"
            ? "bg-primary hover:bg-redClr text-white"
            : variant === "whiteOutline"
            ? "bg-transparent border-white text-white hover:bg-white hover:text-primary hover:border-primary"
            : variant === "outline"
            ? "border-black !rounded-full text-black border"
            : variant === "solid"
            ? "border-primary !text-primary bg-white hover:bg-white hover:!text-primary"
            : variant === "black"
            ? "px-4 py-1.5 border border-black hover:border-[#EBEBEB] text-white bg-black hover:bg-[#EBEBEB] hover:text-black !rounded-full"
            : variant === "gray"
            ? "px-4 py-1.5 border border-[#EBEBEB] text-black bg-[#EBEBEB] !rounded-full"
            : variant === "outlineBlack"
            ? "border-black hover:border-primary !text-black hover:bg-primary hover:!text-white"
            : ""
        } ${className}`}
      {...other}
    >
      {loading ? (
        <Icon
          icon="eos-icons:bubble-loading"
          width="1.5rem"
          height="1.5rem"
          className="mx-auto"
        />
      ) : (
        children
      )}
      {arrow && (
        <Icon
          icon="fluent:arrow-right-32-filled"
          width="1.5rem"
          height="1.5rem"
        />
      )}
      {arrowr && (
        <Icon
          icon="fluent:arrow-right-32-filled"
          width="2rem"
          height="2rem"
          className={`-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out bg-black p-1 rounded-full text-white ${
            bggray
              ? "!bg-[#EBEBEB] group-hover:!bg-black !text-black group-hover:!text-white"
              : ""
          }`}
        />
      )}
    </button>
  );
};

export default Button;
