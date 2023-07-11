import React from "react";
import FooterLogo from "../logo/8_Transparent_Image_small.png";
import Fade from 'react-reveal/Fade';

const TemplateFooter = () => {

    return (
        <div className="template-footer px-3 py-5 bgc-black text-c-muted">
        <footer class="footer">
            <div class="container">
                <div class="row">
                <div class="col-12 col-sm-6">
                <Fade left delay={100}><img className="img-fluid" src={FooterLogo}></img></Fade>
                    <ul class="list-unstyled mt-3">
                    <Fade left delay={200}><li>Marschowitzer Str. 18</li></Fade>
                    <Fade left delay={400}><li>87600 Kaufbeuren</li></Fade>
                    <Fade left delay={600}><li><a href="#" class="link-primary">mail@home-build-service.de</a></li></Fade>
                    </ul>
                </div>
                <div class="col-12 col-sm">
                <Fade delay={300}><h3 className="font-teko mt-3 text-c-light">Übersicht</h3></Fade>
                    <ul class="list-unstyled mt-3">
                    <Fade delay={400}><li>Home</li></Fade>
                    <Fade delay={600}><li>Kontakt</li></Fade>
                    <Fade delay={800}><li>Über uns</li></Fade>
                    </ul>
                </div>
                <div class="col-12 col-sm">
                <Fade delay={500}><h3 className="font-teko mt-3 text-c-light">Weiteres</h3></Fade>
                    <ul class="list-unstyled mt-3">
                    <Fade delay={600}><li>Impressum</li></Fade>
                    <Fade delay={800}><li>Datenschutzerklärung</li></Fade>
                    </ul>
                </div>
                </div>
            </div>

            <div class="row">
                <div className="text-center mt-4 text-c-dark">
                &copy; Copyright 2023 | Home Build Service
                </div>
            </div>

            </footer>
        </div>
      );
}
export default TemplateFooter