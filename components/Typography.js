import React from 'react';

const Typography = ({ heading, className = '', level = 1 }) => {
  const resultText = heading?.split('^') || [''];
  
  const Tag = level === 'p' ? 'p' : `h${level}`;
  const displayClass = level === 'p' ? 'displayPara' : `display${level}`;

  return (
    <Tag className={`${displayClass}  ${className}`}>
      {resultText.map((segment, index) =>
        index % 2 === 0 ? (
          segment
        ) : (
          <span className="text-primary" key={`${segment}-${index}`}>
            {` ${segment} `}
          </span>
        )
      )}
    </Tag>
  );
};

// Individual component exports for backward compatibility
export const Heading1 = (props) => <Typography {...props} level={1} />;
export const Heading2 = (props) => <Typography {...props} level={2} />;
export const Heading3 = (props) => <Typography {...props} level={3} />;
export const Heading4 = (props) => <Typography {...props} level={4} />;
export const Heading5 = (props) => <Typography {...props} level={5} />;
export const Paragraph = (props) => <Typography {...props} level="p" />;