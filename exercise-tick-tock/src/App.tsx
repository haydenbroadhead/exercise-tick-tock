import './App.css';
import { DigitalFace } from './DigitalFace'
import { AnalogueFace} from './AnalogueFace'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AnalogueFace></AnalogueFace>
        <DigitalFace></DigitalFace>
      </div>

    </div>
  );
}

export default App;
