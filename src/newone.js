import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Mainhome from './components/Mainhome';
import Quiz from './components/Quiz';
import AwarenessClasses from './components/AwarnessClasses';
import Complaints from './components/Complaints';
import EcoChallenges from './components/EcoChallenges';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/mainhome' element={<Mainhome/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/awarenessclasses' element={<AwarenessClasses/>}/>
    <Route path='/complaints' element={<Complaints/>}/>
    <Route path='/eco-challenges' element={<EcoChallenges/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
