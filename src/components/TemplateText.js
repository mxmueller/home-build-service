import React from "react";
import ContentHeadline from './ingredients/ContentHeadline';
import Bounce from 'react-reveal/Bounce';

const TemplateText = ({ headline, text, theme }) => {

    const isOrangeTheme = theme === "orange";

    return (
        <div className={`template-text px-3 py-5 bgc-light ${isOrangeTheme ? "bgc-primary" : ""}`}>
            <div className="container">
                <ContentHeadline headline={headline} theme={theme}></ContentHeadline>
                <Bounce left>
                    <p className="text-left m-0 mt-5 font-poppins">{text}</p>
                </Bounce>
            </div>
        </div>
      );
}
export default TemplateText