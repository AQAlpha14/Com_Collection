"use client";
import React from "react";
import { Heading5, Paragraph } from "../Typography";
import { footerSections, socialLinks } from "@/mockData/MockData";
import Link from "../Link";
import Image from "../Image";

const Footer1 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>

      <footer className="pt-12 bg-primary relative text-white">
        {/* <div className="absolute right-0 bottom-0">
          <EliteRightSVG />
        </div> */}
        <div className="container">
          <div className="pb-6">
            <div className="flex sm:flex-row flex-col sm:justify-between justify-center">
              <div className="">
                <Link href="/" className="mb-2 cursor-pointer sm:!inline-block">
                  <Image
                    src={`/assets/images/footerlogo.svg`}
                    alt="logo"
                    width={200}
                    height={64}
                    className="xl:w-48 lg:w-36 w-32 sm:mx-0 mx-auto"
                  />
                </Link>
                <Paragraph
                  blackHeading={"Experience lasting care at EMARION patented tech and compassionate technicians  and be healed with a personal touch."}
                  className="max-w-lg w-full pt-4 sm:text-left text-center" />
              </div>
              <div className="">
                <Heading5 className="pt-4 sm:text-end text-center !mb-0" heading={`Follow Us:`} />
                <div className="flex items-center justify-center pt-1">
                  {socialLinks.map((item, index) => (
                    <div key={index} className="w-[40px] h-[40px] flex items-center sm:justify-end justify-center">
                      <Link href={item.link} target="_blank" >
                        {item.icon}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 pb-4">
              {footerSections.map((section, index) => (
                <FooterSection
                  key={index}
                  title={section.title}
                  links={section.links}
                  className={index === 5 ? "lg:col-span-1 col-span-2 !py-0" : ""}
                />
              ))}
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center">
            <Paragraph
              className="lg:text-end !text-sm"
              blackHeading={`Copyright © ${currentYear} All Rights Reserved`}
            />
          </div>
        </div>
      </footer >
    </>
  );
};

const FooterSection = ({ title, links, className }) => (
  <>
    <div className={`pt-2 ${className}`}>
      <div className="">
        <Heading5 blackHeading={title} className="!text-left " />
      </div>
      {links.map(({ name, link, icon }, index) => (
        <div
          key={index}
          className={`flex items-center gap-2`}
        >
          {icon && (
            <Image
              src={icon}
              alt="logo"
              width={25}
              height={25}
              className=""
            />
          )}
          <Link
            href={link}
            className=" w-full my-1 inline-block group sm:text-sm text-xs "
          >
            {name}
          </Link>
        </div>
      ))}

    </div>
  </>
);
export default Footer1;
