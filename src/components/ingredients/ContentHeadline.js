import React from "react";
import Slide  from 'react-reveal/Fade';

const ContentHeadline = ({ headline, theme }) => {

  const isOrangeTheme = theme === "orange";

  return (
    <div className={`content-headline ${isOrangeTheme ? "bgc-primary" : ""}`}>
        <Slide left delay={200}>
            <h2 className="text-left font-teko display-2 pb-0 mb-1">{headline}</h2>
        </Slide >
        <Slide left delay={800} duration={1000}>
            <div className="animation"></div>
        </Slide >
    </div>
  );
};

export default ContentHeadline;