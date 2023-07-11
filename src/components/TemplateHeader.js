import React from "react";
import Logo from "../logo/1_Transparent_Image_small.png"
import { useState } from "react";


const TemplateHeader = ({ }) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`template-header`}>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <button
                         className={`burger ${isActive ? 'active' : ''}`}
                         onClick={toggleActive}
                        ></button>
                    </div>
                    <div class="col">
                        <img src={Logo} className="image-fluid w-75"></img>
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                </div>
            </div>
        </div>
      );
}
export default TemplateHeader