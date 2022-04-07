import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import BMI from './pages/BMI'
import About from './pages/About'
import Results from '../src/pages/Results'
import {BMIProvider} from './context/BMIContext'
import Error from './pages/Error';
import Diets from './pages/Diets';

function App() {

  return (
    <div>
     <Router>
       <BMIProvider>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/what-is-bmi' element={<BMI />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/results' element={<Results />}/>
         <Route path='/*' element={<Error />}/>
         <Route path='/diets' element={<Diets />}/>
       </Routes>
       </BMIProvider>
     </Router>
    </div>
  );
}

export default App;
