import React from 'react';
import SearchPage from './SearchPage';
import LearnMore from './LearnMore';
import Header from './Header'
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";


export default function App() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Redirect from='/' to='/search' />
          <Switch>
            <Route path="/learnmore/:hitId" component={LearnMore}/>
            <Route path="/search" component={SearchPage} />
          </Switch>
        </div>
      </Router>
    );
}