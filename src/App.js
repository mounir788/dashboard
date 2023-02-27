import './App.css';
import { Routes, Route } from "react-router-dom";
import { Aside } from './Aside';
import { About } from './About';
import { HomepageHeader } from './HomepageHeader';


function App() {
  return (
    <div className="App">
      <Aside />

      <Routes>
        <Route path='/hero' element={<HomepageHeader />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
