import './App.scss';

import Slider from './components/Slider';
import TemplateText from './components/TemplateText';
import TemplateForm from './components/TemplateForm';
import TemplateFooter from './components/TemplateFooter';

function App() {
  return (
    <div className="App">
        
      <TemplateText
        headline="Wir liefern erstklassige Ergebnisse, die Ihren Anforderungen gerecht werden."
        text="Möchten Sie Ihr Zuhause in neuem Glanz erstrahlen lassen? Unsere Handwerker sind Ihre zuverlässigen Partner für professionelle Malerarbeiten. Erleben Sie perfekte Farbharmonie und präzise Ausführung - für ein Zuhause, das Sie stolz präsentieren können."
        theme={"orange"}
      />

      <TemplateForm />

      <TemplateText
        headline="Wir liefern erstklassige Ergebnisse, die Ihren Anforderungen gerecht werden."
        text="Möchten Sie Ihr Zuhause in neuem Glanz erstrahlen lassen? Unsere Handwerker sind Ihre zuverlässigen Partner für professionelle Malerarbeiten. Erleben Sie perfekte Farbharmonie und präzise Ausführung - für ein Zuhause, das Sie stolz präsentieren können."
      />

      <TemplateFooter />
    </div>
  );
}

export default App;
