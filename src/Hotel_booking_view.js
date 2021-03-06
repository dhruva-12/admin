import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Bottom from './Bottom';
export default class Hotel_booking_view extends Component{
  render() {
    return (
      <div>
        
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
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Hotel Booking Details</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-1">
                <h2>Hotel Booking User Details</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Hotel Name :</td>
                      <td>Doe</td>
                    </tr>
                    <tr>
                      <td>Start Date :</td>
                      <td>12 mar, 2017</td>
                    </tr>
                    <tr>
                      <td>End Date :</td>
                      <td>12 mar, 2017</td>
                    </tr>
                    <tr>
                      <td>User Name</td>
                      <td>John Mathive</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>+01 32145 45678</td>
                    </tr>
                    <tr>
                      <td>Email id</td>
                      <td>my test@gmail.com</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>Chennai</td>
                    </tr>
                    <tr>
                      <td>Adults</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Childrens</td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
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