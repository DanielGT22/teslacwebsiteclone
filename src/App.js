
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Language from './Components/Language';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header /> 
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route  path="/language" element={<Language />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
