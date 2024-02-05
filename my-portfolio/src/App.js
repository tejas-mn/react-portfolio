import './App.css';
import {LeftComponent} from './components/LeftComponent';
import { RightComponent } from './components/RightComponent';
import { ProfileLinks } from './components/ProfileLinks';
function App(props) {
  return (
    <div className="App">

      <LeftComponent/>
      
      <RightComponent/>
    </div>
  );
}

export default App;
