import './App.scss';

import Slider from './components/Slider';
import TemplateText from './components/TemplateText';
import TemplateForm from './components/TemplateForm';
import TemplateFooter from './components/TemplateFooter';
import TemplateOpener from './components/TemplateOpener';
import TemplateHeader from './components/TemplateHeader';

import { ParallaxProvider } from 'react-scroll-parallax';

import Fade from "react-reveal";
import Slide from 'react-reveal/Slide';

function App() {
  return (
      <div className="App">
          
        <TemplateHeader />
        
        <TemplateOpener />

        <Fade bottom duration={50}>    
          <TemplateText
            headline="Wir liefern erstklassige Ergebnisse, die Ihren Anforderungen gerecht werden."
            text="Möchten Sie Ihr Zuhause in neuem Glanz erstrahlen lassen? Unsere Handwerker sind Ihre zuverlässigen Partner für professionelle Malerarbeiten. Erleben Sie perfekte Farbharmonie und präzise Ausführung - für ein Zuhause, das Sie stolz präsentieren können."
            theme={"orange"}
          />
        </Fade>

        <Fade bottom duration={50}> 
        <TemplateForm />
        </Fade>

        <Fade bottom duration={50}> 
          <TemplateText
            headline="Wir liefern erstklassige Ergebnisse, die Ihren Anforderungen gerecht werden."
            text="Möchten Sie Ihr Zuhause in neuem Glanz erstrahlen lassen? Unsere Handwerker sind Ihre zuverlässigen Partner für professionelle Malerarbeiten. Erleben Sie perfekte Farbharmonie und präzise Ausführung - für ein Zuhause, das Sie stolz präsentieren können."
          />
        </Fade>
        
        <Slide bottom>
          <TemplateFooter />
        </Slide>
      </div>
  );
}

export default App;
