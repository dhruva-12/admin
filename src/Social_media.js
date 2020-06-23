
import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';

export default class Social_media extends Component{
  render() {
    return (
      <div>
        
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
           
            {/*== MY ACCCOUNT ==*/}
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
                  <li className="active"><a href="#"> Social Media</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <div className="inn-title">
                  <h4>Social Media and Share</h4>
                  <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                </div>
                <div className="bor">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email1">Facebook:</label>
                      <input type="text" className="form-control" id="email1" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email2">Twitter:</label>
                      <input type="text" className="form-control" id="email2" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email3">Google Plus:</label>
                      <input type="text" className="form-control" id="email3" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email4">Linked In:</label>
                      <input type="text" className="form-control" id="email4" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email5">Whats App:</label>
                      <input type="text" className="form-control" id="email5" placeholder />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
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
}