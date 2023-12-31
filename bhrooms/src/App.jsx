import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import About from './Pages/About';
import CreateListing from './Pages/CreateListing';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import UpdateListings from './Pages/UpdateListings';

function App() {

  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<Search />} />
      <Route path='/listing/:listingId' element={<Listings />} />
  

      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListings />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
