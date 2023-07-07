import './App.scss';

import Slider from './components/Slider';
import TemplateText from './components/TemplateText';
import TemplateForm from './components/TemplateForm';

function App() {
  return (
    <div className="App">
        
      <TemplateText
        headline="Headline"
        text="test"
        theme={"orange"}
      />

      <TemplateForm />

      <TemplateText
        headline="Headline"
        text="test"
      />

    </div>
  );
}

export default App;
