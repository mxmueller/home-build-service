import React from "react";
import FooterLogo from "../logo/8_Transparent_Image_small.png";


const TemplateFooter = () => {

    return (
        <div className="template-footer">
        <footer className="bgc-black text-white font-poppins">
        <div class="container-fluid">
            
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <img className="img-fluid" src={FooterLogo}></img>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="content">
                    <h3 className="font-teko mt-3">Übersicht</h3>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="content">
                        <h3 className="font-teko mt-3">Weiteres</h3>
                    </div>
                </div>
            </div>
        
            <div className="row">
                <div className="footer-copyright py-3 text-center">
                    <div className="container-fluid text-light">
                        © 2023 Copyright: <a href="http://www.home-build-service.de"> home-build-service.de </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </footer>
        </div>
      );
}
export default TemplateFooter