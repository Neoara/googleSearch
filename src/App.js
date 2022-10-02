import MainPage from "./Components/MainPage";
import Navbar from "./Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./globalStyle.css"

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
