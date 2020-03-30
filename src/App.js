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



const wrapperNews=()=><News aloha='Aloha from free love'/>;


const App=(props)=>{
    const wrapperDialogs=()=>{
        return( <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>)
    }; 
    const wrapperProfile=()=><Profile postData={props.state.profilePage.postData} />;
    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                   <Route path='/dialogs' render={wrapperDialogs} />
                   <Route path='/profile' component={wrapperProfile} />

                   <Route path='/news' component={wrapperNews} />
                   <Route path='/music'component={Music} />
                   <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
        
    ) 
};

export default App;