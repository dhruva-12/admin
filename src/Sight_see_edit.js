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

export default class Sight_see_edit extends Component{
  render() {
    return (
      <div>
       
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
              {/*== LEFT MENU ==*/}
              
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><Link to="index.html"><i className="fa fa-home" aria-hidden="true" /> Home</Link> 
                  </li>
                  <li className="active-bre"><Link to="#"> Edit Sight Seeing</Link> 
                  </li>
                  <li className="page-back"><Link to="index.html"><i className="fa fa-backward" aria-hidden="true" /> Back</Link> 
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <div className="box-inn-sp">
                  <div className="inn-title">
                    <h4>Edit Sight Seeing</h4>
                    <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                  </div>
                  <div className="bor">
                    <form>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="list-title" type="text" defaultValue="Sight Seeing Name" className="validate" />
                          <label htmlFor="list-title">Sight Seeing Name</label>
                        </div>
                        <div className="input-field col s12">
                          <div className="file-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload Blog Banner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea1" className="materialize-textarea" defaultValue={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} />
                          <label htmlFor="textarea1">Sight Seeing Descriptions:</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Category</label>
                        </div>
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Sub Category</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="Sight-Seeing-auth" type="text" defaultValue="David Villiam" className="validate" />
                          <label htmlFor="Sight-Seeing-auth">Author Name</label>
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
          </div>
        </div>
        {/*== BOTTOM FLOAT ICON ==*/}
       <Bottom></Bottom>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
}