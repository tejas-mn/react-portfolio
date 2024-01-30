import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {LeftComponent} from './components/LeftComponent';
import { RightComponent } from './components/RightComponent';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <LeftComponent/>
      <RightComponent/>
    </div>
  );
}

export default App;
