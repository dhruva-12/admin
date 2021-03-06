import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Bottom from './Bottom';
import Routes from './Routes';
export default class  Listing_cat_add extends Component{
  render() {
    return (
      <div>
       
        <div className="container-fluid sb1">
          <div className="row">
            <Notifysearch></Notifysearch>
            <Drop></Drop>
            
          </div>
        </div>
        
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
             <Routes></Routes>
             
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Add New listing Categories</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <h2>Add New listing Categories</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="list-title" type="text" defaultValue className="validate" />
                      <label htmlFor="list-title">Enter Listing Category</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       
<Bottom></Bottom>
       
      </div>
    );
  }
}