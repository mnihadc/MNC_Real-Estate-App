import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';

function App() {

  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-out' element={<SignOut />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
}

export default App
