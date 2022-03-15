import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import SearchPage from './pages/SearchPage';


function App() {
 
  return (
    <BrowserRouter>
    <div className="app">
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/search' element={<SearchPage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
