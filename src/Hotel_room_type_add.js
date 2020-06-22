import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

var Hotel_room_type_add = React.createClass({
  render: function() {
    return (
      <div>
        
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
              <a href="#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></a>
              <a href="#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></a>
              <a href="index.js" className="logo"><img src="images/logo1.png" alt="" />
              </a>
            </div>
            {/*== SEARCH ==*/}
            <div className="col-md-6 col-sm-6 mob-hide">
              <form className="app-search">
                <input type="text" placeholder="Search..." className="form-control" />
                <a href><i className="fa fa-search" /></a>
              </form>
            </div>
            {/*== NOTIFICATION ==*/}
            <div className="col-md-2 tab-hide">
              <div className="top-not-cen">
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></a>
              </div>
            </div>
            {/*== MY ACCCOUNT ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6">
              {/* Dropdown Trigger */}
              <a className="waves-effect dropdown-button top-user-pro" href="#" data-activates="top-menu"><img src="images/user/6.png" alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              {/* Dropdown Structure */}
              <ul id="top-menu" className="dropdown-content top-menu-sty">
                <li><a href="setting.js" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</a>
                </li>
                <li><a href="listing-all.js" className="waves-effect"><i className="fa fa-list-ul" aria-hidden="true" /> Listings</a>
                </li>
                <li><a href="hotel-all.js" className="waves-effect"><i className="fa fa-building-o" aria-hidden="true" /> Hotels</a>
                </li>
                <li><a href="package-all.js" className="waves-effect"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                </li>
                <li><a href="event-all.js" className="waves-effect"><i className="fa fa-flag-checkered" aria-hidden="true" /> Events</a>
                </li>
                <li><a href="offers.js" className="waves-effect"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                </li>
                <li><a href="user-add.js" className="waves-effect"><i className="fa fa-user-plus" aria-hidden="true" /> Add New User</a>
                </li>
                <li><a href="#" className="waves-effect"><i className="fa fa-undo" aria-hidden="true" /> Backup Data</a>
                </li>
                <li className="divider" />
                <li><a href="#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              <div className="sb2-12">
                <ul>
                  <li><img src="images/placeholder.jpg" alt="" />
                  </li>
                  <li>
                    <h5>Victoria Baker <span> Santa Ana, CA</span></h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                  <li><a href="index.js"><i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard</a>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-list-ul" aria-hidden="true" /> Listing</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="listing-all.js">All listing</a>
                        </li>
                        <li><a href="listing-add.js">Add New listing</a>
                        </li>
                        <li><a href="listing-cat-all.js">All listing Categories</a>
                        </li>
                        <li><a href="listing-cat-add.js">Add listing Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-user" aria-hidden="true" /> Users</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="user-all.js">All Users</a>
                        </li>
                        <li><a href="user-add.js">Add New user</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="package-all.js">All Packages</a>
                        </li>
                        <li><a href="package-add.js">Add New Package</a>
                        </li>
                        <li><a href="package-cat-all.js">All Package Categories</a>
                        </li>
                        <li><a href="package-cat-add.js">Add Package Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header active"><i className="fa fa-h-square" aria-hidden="true" /> Hotels</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-all.js">All Hotels</a>
                        </li>
                        <li><a href="hotel-add.js">Add New Hotel</a>
                        </li>
                        <li><a href="hotel-room-type-all.js">Room Type</a>
                        </li>
                        <li><a href="hotel-room-type-add.js" className="menu-active">Add Room Type</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-picture-o" aria-hidden="true" /> Sight Seeings</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="sight-see-all.js">All Sight Seeings</a>
                        </li>
                        <li><a href="sight-see-add.js">Add New Sight Seeing</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-calendar-o" aria-hidden="true" /> Events</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="event-all.js">All Events</a>
                        </li>
                        <li><a href="event-add.js">Add New Event</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-braille" aria-hidden="true" /> Ui-Kits</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="ui-form.js">ui-form</a>
                        </li>
                        <li><a href="ui-kit.js">ui-kit</a>
                        </li>
                        <li><a href="ui-table.js">ui-table</a>
                        </li>
                        <li><a href="ui-pre-load.js">ui-pre-load</a>
                        </li>
                        <li><a href="ui-tab.js">ui-tab</a>
                        </li>
                        <li><a href="ui-icons.js">ui-icons</a>
                        </li>
                        <li><a href="ui-collapsible.js">ui-collapsible</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-usd" aria-hidden="true" /> Discounts</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="discount.js">All Discounts</a>
                        </li>
                        <li><a href="discount-add.js">Add New Discounts</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="offers.js">All Offers</a>
                        </li>
                        <li><a href="offers-add.js">Add New Offers</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-ticket" aria-hidden="true" /> Booking &amp; Enquiry</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-booking-all.js">Hotel</a>
                        </li>
                        <li><a href="package-booking-all.js">Package</a>
                        </li>
                        <li><a href="sight-see-booking-all.js">Sight Seeings</a>
                        </li>
                        <li><a href="event-booking-all.js">Events</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-rss" aria-hidden="true" /> Blog &amp; Articals</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="blog-all.js">All Blogs</a>
                        </li>
                        <li><a href="blog-add.js">Add Blog</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="social-media.js"><i className="fa fa-plus-square-o" aria-hidden="true" /> Social Media</a>
                  </li>
                  <li><a href="login.js" target="_blank"><i className="fa fa-sign-in" aria-hidden="true" /> Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Add Room Type</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <h2>Add New Room Type</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="list-title" type="text" defaultValue className="validate" />
                      <label jsFor="list-title">Enter Room Type</label>
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
        {/*== BOTTOM FLOAT ICON ==*/}
        <section>
          <div className="fixed-action-btn vertical">
            <a className="btn-floating btn-large red pulse">
              <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a>
              </li>
              <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a>
              </li>
              <li><a className="btn-floating green"><i className="material-icons">publish</i></a>
              </li>
              <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a>
              </li>
            </ul>
          </div>
        </section>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
});