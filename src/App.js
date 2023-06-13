// ! FONTS
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Medium.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';
import './fonts/Poppins/Poppins-Light.ttf';
import './fonts/Teko/Teko-Regular.ttf';
import './fonts/Teko/Teko-Medium.ttf';
import './fonts/Teko/Teko-Light.ttf';

import './App.scss';

// ! COMPONENTS 
import AnimationOnScrollText from './components/AnimationOnScrollText';
import MainForm from './components/MainForm';
import Opener from './components/Opener';
import HeadBar from './components/HeadBar';

function App() {
  return (
    <div className="App">



      <main className='w-fullscreen'>
        <div className='w-content-tube'>
          <div className='w-inner-content-tube'>
          <HeadBar></HeadBar>
          <Opener></Opener>
          </div>
        </div>
      </main>

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
      <MainForm />
      <h1>Test</h1>
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
 
    </div>
  );
}

export default App;
