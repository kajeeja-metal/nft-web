import React, {useEffect, useState} from 'react';

import nav from '../../../public/collections/tabnav.module.scss';
import paging from '../../../public/collections/pagination.module.scss';
import button from '../../../public/account/Buttons.module.scss';
import classes from '../create/customizestyle.module.scss';

import Paging from '../../../components/common/pagination.js';

import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleRight, faEye, faSearch, faFont } from '@fortawesome/free-solid-svg-icons';
  

const StepCustomizeStyle = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const [modalShow, ModalSetShow] = useState(false);
  const handleClose = () => ModalSetShow(false);
  const handleShow = () => ModalSetShow(true);

  return (
    <>  
        <div className={`text-center`+ ' ' + classes.titleWrap}>
          <h1 className={classes.title}>Customize collection style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Heading</label>
          </div>
          <div className='col-md-4'>
              <div className={classes.formControl} variant="primary" onClick={handleShow}>
                <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}>
                   Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                </label>
              </div>
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Text Body</label>
          </div>
          <div className='col-md-4'>
            <div className={classes.formControl} variant="primary" onClick={handleShow}>
              <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}>
                  Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
              </label>
            </div>
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Title text color</label>
          </div>
          <div className='col-md-4'>
             
                <div className={classes.formControl}>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#solid">Soild</a>
                    </li>
                    <li className="nav-item">
                        <a className={nav.navLink} data-bs-toggle="tab" href="#gredient">Gradient</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                      <div className="tab-pane show active" id="solid">
                        <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                            <span className={`form-control` + ' ' + nav.colorBg}></span>
                            <input type="text" value="#05FF44" className="form-control" />                            
                        </div>
                      </div>
                      <div className="tab-pane fade" id="gredient">
                        <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                          <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                        </div>
                      </div>
                  </div>
                </div>
              
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Body text Color</label>
          </div>
          <div className='col-md-4'>
        
              <div className={classes.formControl}>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#solid2">Soild</a>
                  </li>
                  <li className="nav-item">
                      <a className={nav.navLink} data-bs-toggle="tab" href="#gredient2">Gradient</a>
                  </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane show active" id="solid2">
                      <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                          <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                          <input type="text" value="#05FF44" className="form-control" />                            
                      </div>
                    </div>
                    <div className="tab-pane fade" id="gredient2">
                      <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                          <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                        </div>
                    </div>
                </div>
              </div>
          
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Button Background Color</label>
          </div>
          <div className='col-md-4'>
           
            <div className={classes.formControl}>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={nav.navLink } data-bs-toggle="tab" href="#solid3">Soild</a>
                </li>
                <li className="nav-item">
                    <a className={nav.navLink+ ' ' + nav.active} data-bs-toggle="tab" href="#gredient3">Gradient</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade " id="solid3">
                  <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                      <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                      <input type="text" value="#05FF44" className="form-control" />                            
                  </div>
                </div>
                <div className="tab-pane show active" id="gredient3">
                  <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                    <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Button Border Color</label>
          </div>
          <div className='col-md-4'>
      
              <div className={classes.formControl}>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <a className={nav.navLink } data-bs-toggle="tab" href="#solid4">Soild</a>
                  </li>
                  <li className="nav-item">
                      <a className={nav.navLink+ ' ' + nav.active} data-bs-toggle="tab" href="#gredient4">Gradient</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade " id="solid4">
                    <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                        <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                        <input type="text" value="#05FF44" className="form-control" />                            
                    </div>
                  </div>
                  <div className="tab-pane show active" id="gredient4">
                    <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                      <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Slide Button Color</label>
          </div>
          <div className='col-md-4'>
            <div className={classes.formGroup}> 
              <div className={classes.formControl}>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <a className={nav.navLink } data-bs-toggle="tab" href="#solid5">Soild</a>
                  </li>
                  <li className="nav-item">
                      <a className={nav.navLink+ ' ' + nav.active} data-bs-toggle="tab" href="#gredient5">Gradient</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade " id="solid5">
                    <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                        <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                        <input type="text" value="#05FF44" className="form-control" />                            
                    </div>
                  </div>
                  <div className="tab-pane show active" id="gredient5">
                    <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                      <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.formGroup}>
          <div className='d-flex justify-content-between'>
            <a className={`btn ${button.btnTextDanger}`}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
            <div>
              <button className={`btn ${button.btnOutlinePrimary}`} style={{"margin-right":8}}>Cancel</button>
              <button className={`btn ${button.btnPrimary}`}>Save Draft</button>
            </div>
          </div>
        </div>

        { /* Modal Start here  */ }   

        <Modal show={modalShow} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className={classes.modalLg}>
          <Modal.Header closeButton style={{border:"none",paddingBottom:0}}>
            <Modal.Title>&nbsp;</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={classes.titleWrap} style={{textAlign:"left"}}>
              <h1 className={classes.title}>Selelct Typography</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={`row`+ ' ' + classes.formGroup}>
              <div className={`col-md-6`+ ' ' + classes.formGroup + ' ' + classes.search}>
                <div className={classes.searchModal}>
                  <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
                  <input placeholder='Search... ' className='form-control'/>
                </div>
              </div>
              <div className={`col-md-4`+ ' ' + classes.formGroup}>
                <div className={classes.searchModal}>
                  <button className='btn'><FontAwesomeIcon icon={faFont} className={classes.faFont} /></button>
                  <input placeholder='Font Type' className='form-control'/>
                </div>
              </div>           
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className={classes.fontItemList + ' ' + classes.active}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Open Sans</h3>
                        <span>Steve Matteson</span>
                      </div>
                      <div className={classes.fStyle}>Variable</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Open Sans</h3>
                    <div className={classes.btnsRow}>
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                          <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                        </Button>
                        <Button className={`btn ${button.btnTextPrimary}`} onClick={handleClose}>
                          Current Select
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className={classes.fontItemList}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Roboto</h3>
                        <span>Christian Robertson</span>
                      </div>
                      <div className={classes.fStyle}>12 Style</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Roboto</h3>
                    <div className={classes.btnsRow}>
                      
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                        <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                      </Button>
                      <Button className={`btn ${button.btnPrimary}`} onClick={handleClose}>
                        Select
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className={classes.fontItemList}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Roboto</h3>
                        <span>Christian Robertson</span>
                      </div>
                      <div className={classes.fStyle}>12 Style</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Roboto</h3>
                    <div className={classes.btnsRow}>
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                          <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                        </Button>
                        <Button className={`btn ${button.btnPrimary}`} onClick={handleClose}>
                          Select
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className={classes.fontItemList}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Roboto</h3>
                        <span>Christian Robertson</span>
                      </div>
                      <div className={classes.fStyle}>12 Style</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Roboto</h3>
                    <div className={classes.btnsRow}>
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                          <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                        </Button>
                        <Button className={`btn ${button.btnPrimary}`} onClick={handleClose}>
                          Select
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className={classes.fontItemList}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Roboto</h3>
                        <span>Christian Robertson</span>
                      </div>
                      <div className={classes.fStyle}>12 Style</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Roboto</h3>
                    <div className={classes.btnsRow}>
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                          <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                        </Button>
                        <Button className={`btn ${button.btnPrimary}`} onClick={handleClose}>
                          Select
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className={classes.fontItemList}>
                  <input type="radio" />
                  <div className={classes.fontNamePreview}>
                    <div className={classes.topFontStyle}>
                      <div className={classes.fLeft}>
                        <h3>Roboto</h3>
                        <span>Christian Robertson</span>
                      </div>
                      <div className={classes.fStyle}>12 Style</div>
                    </div>
                    <h2>Almost before we knew it, we had left the ground</h2>
                  </div>                  
                  <div className={classes.fontBtnSelect}>
                    <h3 className={classes.fontName}>Roboto</h3>
                    <div className={classes.btnsRow}>
                      <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
                          <FontAwesomeIcon icon={faEye} className={classes.faTrash} /> Preview
                        </Button>
                        <Button className={`btn ${button.btnPrimary}`} onClick={handleClose}>
                          Select
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className={paging.totalPaging}>
              <div className={paging.total}>
                <select className='form-control'>
                  <option>20</option>
                  <option>40</option>
                  <option>60</option>
                  <option>80</option>
                </select>
                <span className={paging.totalLbl}>490 Assets</span>
              </div>
              <Paging />
            </div>

           
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
        
    </>
  );
}

export default StepCustomizeStyle;
