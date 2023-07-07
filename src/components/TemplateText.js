
import React from "react";

const TemplateText = ({ headline, text, theme }) => {

    const isOrangeTheme = theme === "orange";

    return (
        <div className={`template-text px-3 py-4 bgc-light ${isOrangeTheme ? "bgc-primary" : ""}`}>
            <div className="container">
                <h1 className="text-left font-teko display-2">{headline}</h1>
                <hr></hr>
                <p className="text-left m-0 font-poppins">{text}</p>
            </div>
        </div>
      );
}
export default TemplateText