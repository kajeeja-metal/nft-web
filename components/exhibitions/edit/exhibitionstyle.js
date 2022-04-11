import React, {useEffect, useState} from 'react';
import Image from "next/image"

import nav from '../../../public/exhibitions/tabnav.module.scss';
import button from '../../../public/account/Buttons.module.scss'
import Pagination from '../../../components/common/paginationtotal.js';
import style from '../../../public/exhibitions/index.module.scss'; 
import classes from '../edit/exhibitionstyle.module.scss';


import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight, faEye, faSearch, faFont, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import ThumbList from '../../../public/exhibitions/images/thumb.png';
  

const ExhibitionStyle = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const [modalShow, ModalSetShow] = useState(false);
  const handleClose = () => ModalSetShow(false);
  const handleShow = () => ModalSetShow(true);

  const [show3,setShow3] = useState(true);
  const [show4,setShow4] = useState(true);

  return (
    <>  
      <div className={`text-center`+ ' ' + style.titleWrap}>
        <h1 className={style.title}>Customize Exhibition Style</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>


      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Font Family : Heading</label>
        </div>
        <div className='col-md-7'>
            <div className={style.formControl} variant="primary" onClick={handleShow}>
              <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}>
                  Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
              </label>
            </div>
        </div>
      </div>
      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Font Family : Text Body</label>
        </div>
        <div className='col-md-7'>
          <div className={style.formControl} variant="primary" onClick={handleShow}>
            <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}>
                Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
            </label>
          </div>
        </div>
      </div>
      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Title text color</label>
        </div>
        <div className='col-md-7'>
            
              <div className={style.formControl}>
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
      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Body text Color</label>
        </div>
        <div className='col-md-7'>
      
            <div className={style.formControl}>
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
      
      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Collection Background Image</label>
        </div>
        <div className='col-md-8'>
          <div className={`mb-3`+ ' '  + style.formControl}>
            <label className={classes.toggleTitle} onClick={()=>setShow3(!show3)}>
              <input type="checkbox" /> <span>Select Image</span>
            </label>
            {
              show3 &&
              <div className={classes.toggleContent}>
                <ul className={classes.imgLIst}>
                  <li className={classes.active}>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" checked />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Image
                        src={ThumbList}
                        height={90} width={90} alt="Thumbs"
                      />
                      <input type="radio" name="selectcollectionbg" />
                    </label>
                  </li>
                  <li>
                  
                    <label className={classes.Addimg}>
                      <FontAwesomeIcon icon={faPlus}  />
                    </label>
                  
                  </li>
                </ul>
                <div className={`row` + ' ' + classes.imageStyleSelect}>
                  <div className='col-md-6'>
                    Image Adjustment
                  </div>
                  <div className='col-md-6'>
                    <select className='form-control'>
                      <option value="">Image Style</option>
                      <option value="50px 100px">Fill the frame vertically</option>
                      <option value="10% 40%">Fill the frame horizontally</option>
                      <option value="center top">Cover the frame</option>
                      <option value="right bottom">Original size</option>
                      <option value="left top">Left Top</option>
                      <option value="left center">Left Center</option>
                      <option value="left bottom">Left Bottom</option>
                      <option value="right top">Right Top</option>
                      <option value="right center">Right Center</option>
                    </select>
                  </div>
                </div>
              </div>
            }
            
          </div>
          <div className={`mb-2`+ ' '  + style.formControl}>
            <label className={classes.toggleTitle}>
              <span>Color Fill</span>
            </label>
      
              <div className={classes.toggleContent}>
                  <div className={nav.colorpickertab}  >      
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#solid22">Soild</a>
                        </li>
                        <li className="nav-item">
                            <a className={nav.navLink} data-bs-toggle="tab" href="#gredient22">Gradient</a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active " id="solid22">
                          <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                              <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                              <input type="text" value="#05FF44" className="form-control" />                            
                          </div>
                        </div>
                        <div className="tab-pane fade" id="gredient22">
                          <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                            <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                          </div>
                        </div>
                      </div>
                  </div>
                  
                
              </div>
        
          </div>
        </div>
      </div>

      <div className={style.formGroup}>
        <div className='d-flex justify-content-between'>
          <a className={'btn' + ' ' + button.btnTextDanger}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
          <div className={style.btnGroup}>
            <button type="button" className={'btn' + ' ' + button.btnDanger}> Cancel</button>
            <button type="button" className={'btn' + ' ' + button.btnPrimary}>Save Draft</button>
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
          <div className={style.titleWrap} style={{textAlign:"left"}}>
            <h2 className={style.title}>Selelct Typography</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={`row`+ ' ' + style.formGroup}>
            <div className={`col-md-6`+ ' ' + style.formGroup + ' ' + classes.search}>
              <div className={classes.searchModal}>
                <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
                <input placeholder='Search... ' className='form-control'/>
              </div>
            </div>
            <div className={`col-md-4`+ ' ' + style.formGroup}>
              <div className={classes.searchModal}>
                <button className='btn'><FontAwesomeIcon icon={faFont} className={classes.faFont} /></button>
                <input placeholder='Font Type' className='form-control'/>
              </div>
            </div>           
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className={classes.fontItemList + ' ' + classes.active}>
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
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

        <Pagination />

          
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

export default ExhibitionStyle;
