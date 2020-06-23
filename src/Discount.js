
import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Bottom from './Bottom';
var Discount = React.createClass({
  render: function() {
    return (
      <div>
        
       
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
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
                  <li className="active-bre"><a href="#"> Ui Form</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>All Discounts</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-users" className="dropdown-content">
                          <li><a href="#!">Add New</a>
                          </li>
                          <li><a href="#!">Edit</a>
                          </li>
                          <li><a href="#!">Update</a>
                          </li>
                          <li className="divider" />
                          <li><a href="#!"><i className="material-icons">delete</i>Delete</a>
                          </li>
                          <li><a href="#!"><i className="material-icons">subject</i>View All</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>event</th>
                                <th>Offers</th>
                                <th>Date</th>
                                <th>Country</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <a href="discount-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
});