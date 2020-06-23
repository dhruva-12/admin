import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Forgot from './Forgot';
import ListingAll from './ListingAll';
import Blog_add from './Blog_add';
import Blog_all from './Blog_all';



function Common() {
  return (
    <>

      <Switch>
        <Route path='/Forgot' component={Forgot} />
        <Route path='/ListingAll' component={ListingAll}/>
        
      </Switch>

    </>
  );
}

export default Common;
