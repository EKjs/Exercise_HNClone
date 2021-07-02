import React from 'react';
import SearchPage from './SearchPage';
import LearnMore from './LearnMore';
import Header from './Header'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


export default function App() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/learnmore/:hitId" component={LearnMore}/>
       
        </div>
      </Router>
    );


  
}


