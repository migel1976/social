import React from 'react';
import './app.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';

const App=()=>{
    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                   <Route path='/dialogs' component={Dialogs} />
                   <Route path='/profile' component={Profile} />
                   <Route path='/news' component={News} />
                   <Route path='/music'component={Music} />
                   <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
        
    ) 
};

export default App;