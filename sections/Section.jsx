// components/Section.jsx
import {
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from "@/components/Typography";
import React from "react";

const Section = ({
  children,
  className = "",
  topTitle,
  heading,
  bottomTitle,
  listTitle,
  paragraph = [],
  list = [],
  lists = [],
  txtAlign,
}) => {
  return (
    <>
      <section className={`container ${className}`}>
        <div className="max-w-4xl mx-auto">
          {topTitle && (
            <Heading4
              heading={topTitle}
              className={`${txtAlign ? "text-center" : "text-left"}`}
            />
          )}
          <Heading2
            heading={heading}
            className={`${txtAlign ? "text-center" : "text-left"}`}
          />
          {bottomTitle && (
            <Heading4
              heading={bottomTitle}
              className={`${txtAlign ? "text-center" : "text-left"}`}
            />
          )}
          {paragraph.length > 0 && (
            <div className="space-y-2">
              {paragraph.map((para, ind) => (
                <Paragraph
                  heading={para}
                  key={ind}
                  className={`${txtAlign ? "text-center" : "text-left"}`}
                />
              ))}
            </div>
          )}
          {list.length > 0 && (
            <ul className="my-4">
              {listTitle && (
                <Heading4
                  heading={listTitle}
                  className={`${txtAlign ? "text-center" : "text-left"}`}
                />
              )}
              {list.map((item, ind) => (
                <li
                  className={`displayPara text-black ${
                    txtAlign ? "text-center" : "text-left"
                  }`}
                  key={ind}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          {lists.length > 0 && (
            <div className="mt-4 space-y-4">
              {lists.map((item, idx) => (
                <div key={idx}>
                  <Heading4
                    heading={item.subHeading}
                    className={`mb-2 ${txtAlign ? "text-center" : "text-left"}`}
                  />
                  <Paragraph
                    heading={item.text}
                    className={`mb-2 ${txtAlign ? "text-center" : "text-left"}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {children && <div className="mt-6">{children}</div>}
      </section>
    </>
  );
};

export default Section;
