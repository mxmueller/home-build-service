import './App.scss';

// ! COMPONENTS 
import AnimationScroll from './components/AnimationScroll';
import AnimationOnScrollText from './components/AnimationOnScrollText';
import MainForm from './components/MainForm';
import Opener from './components/Opener';

function App() {
  return (
    <div className="App">

      <AnimationScroll></AnimationScroll>

      <main className='w-fullscreen'>
        <div className='w-content-tube'>
          <div className='w-inner-content-tube'>

          <Opener></Opener>

          </div>
        </div>
      </main>

      <header className="App-header">
          
          

          <AnimationOnScrollText text="Hallo" />
          <AnimationOnScrollText text="Michael" />
          <AnimationOnScrollText text="Müller" />
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <MainForm />
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <AnimationOnScrollText text="Hallo Welt!" />
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;
