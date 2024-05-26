import {Routes,Route, BrowserRouter,} from "react-router-dom";
import './App.css'
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';

function App() {

  return (
    <div className=" h-screen w-screen bg-zinc-700">
     <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Landing />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </BrowserRouter> 

    </div>
  
  )
}

export default App
