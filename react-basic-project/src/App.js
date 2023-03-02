import './App.css';
import Composition from './components/study/Composition';
import Extraction from './components/study/extraction/Extraction';
import ClassComponent from './components/study/ClassComponent';
import FunctionalComponent from './components/study/FunctionalComponent';
import Event from './components/study/Event';
import State from './components/study/hooks/State';
import Reducer from './components/study/hooks/Reducer';
import WelcomeDialog from './components/study/components/WelcomeDialog';
import Dialog from './components/study/components/Dialog';
import ThankDialog from './components/study/components/ThankDialog';

function App() {
  return (
    <div>
      <ThankDialog />
    </div>
  );
}

export default App;