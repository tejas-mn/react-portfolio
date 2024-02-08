import './App.css';
import {LeftComponent} from './components/LeftComponent';
import { RightComponent } from './components/RightComponent';
import { ThemeProvider, ThemeContext } from './Providers/ThemeProvider';
import { useContext } from 'react';

 function App() {
  // const {theme, toggleTheme} = useTheme();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
     <button style={{margin:'10px', color:'black', boxShadow:'0px 0px 10px  #dddddd'}} className='view-btn' onClick={() => toggleTheme()}>{theme}</button>
     <div className={`App ${theme}`} >
    
      <LeftComponent/>
      <RightComponent/>
    </div>
    </>
  
  );
}

export  function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default App;
