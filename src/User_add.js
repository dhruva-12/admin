import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Bottom from './Bottom';


export default class  User_add extends Component{
  render() {
    return (
      <div>
        
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
         <Notifysearch></Notifysearch>
         <Drop></Drop>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              
              {/*== LEFT MENU ==*/}
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><Link to="#"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                  </li>
                  <li className="active-bre"><Link to="#"> Ui Form</Link>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Add New User</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="first_name" type="text" className="validate" />
                              <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input id="last_name" type="text" className="validate" />
                              <label htmlFor="last_name">Last Name</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="phone" type="number" className="validate" />
                              <label htmlFor="phone">Mobile</label>
                            </div>
                            <div className="input-field col s6">
                              <input id="cphone" type="number" className="validate" />
                              <label htmlFor="cphone">Phone</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="city" type="text" className="validate" />
                              <label htmlFor="city">City</label>
                            </div>
                            <div className="input-field col s6">
                              <input id="country" type="text" className="validate" />
                              <label htmlFor="country">Country</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="password" type="password" className="validate" />
                              <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s6">
                              <input id="password1" type="password" className="validate" />
                              <label htmlFor="password1">Confirm Password</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="email" type="email" className="validate" />
                              <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                              <input id="email1" type="email" className="validate" />
                              <label htmlFor="email1">Alternate Email</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input type="submit" className="waves-effect waves-light btn-large" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== BOTTOM FLOAT ICON ==*/}
        <Bottom></Bottom>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
}