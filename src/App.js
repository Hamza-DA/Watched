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
      <main className='bg-primary'>
        <div className='2xl:container 2xl:mx-auto'>
          <Switch>
            <Route path='/' exact component={HomeComponent}></Route>
            <Route path='/search' component={SearchPage}></Route>
            <Route path='/dashboard' component={UserPage}></Route>
            <Route path='/:id' exact component={Single}></Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
