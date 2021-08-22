import SearchPage from './Pages/SearchPage';
import Single from './Pages/Single';
import HomeComponent from './Pages/HomeComponent';
import UserPage from './Pages/UserPage';
import React from 'react';
import Navbar from './Component/Navbar';
import { Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeComponent}></Route>
        <Route path='/search' component={SearchPage}></Route>
        <Route path='/dashboard' component={UserPage}></Route>
        <Route path='/:id' exact component={Single}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
