import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PagesAuth from '@/layout/PageAuth';
import LeftSidebar  from '@/components/account/layout/leftsidebar.js';
import CI from 'public/account/CI.module.scss';

// import form from '../../../public/account/Form.module.scss';
import form from 'public/account/Form.module.scss';
import button from 'public/account/Buttons.module.scss';
import Pagination from '@/components/common/paginationtotal.js';

import classes from 'public/profile/index.module.scss';
import nav from 'public/profile/tabnav.module.scss';

import ThumbList from 'public/profile/images/thumb.png';
import ThumbListSelected from 'public/profile/images/thumbselected.png' ;
import {Button, Modal} from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faPlus, faAngleRight, faSearch, faFont, faCheckCircle, faEye  } from '@fortawesome/free-solid-svg-icons';


export default function Index(props) {
	useEffect(() => {
        if (typeof document !== undefined) {
          require("bootstrap/dist/js/bootstrap");
        }
    }, []);

    useEffect(() => {
        document.querySelector("body").classList.add("collectionpage");
    });
    const [show,setShow] = useState(true);
    const [show2,setShow2] = useState(true);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);

    const [modalShow, ModalSetShow] = useState(false);
    const handleClose = () => ModalSetShow(false);
    const handleShow = () => ModalSetShow(true);

    const [modalShow2, ModalSetShow2] = useState(false);
    const handleClose2 = () => ModalSetShow2(false);
    const handleShow2 = () => ModalSetShow2(true);

    const [modalShow3, ModalSetShow3] = useState(false);
    const handleClose3 = () => ModalSetShow3(false);
    const handleShow3 = () => ModalSetShow3(true);

    

  return ( 
    <>
    <PagesAuth route={props.user}>
      <div className='profileTemplateWrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <LeftSidebar/>
            </div>
            <div className='col-md-9'>
              <div className={classes.titleWrap}>
                <h1 className={classes.title}>Profile Template</h1>
                <p>Personalise your colllection’s layout, colour and background</p>
              </div>

              <div className={`row` + ' ' + classes.formGroup}>
                <div className='col-md-4'>
                  <label>Profile Theme</label>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                      <div className='col-md-7'>
                        <div className={classes.thumbImg}>
                          <Image
                            src={ThumbListSelected}
                            height={375} width={375} alt="Thumbs"
                          />
                        </div>                      
                      </div>
                      <div className='col-md-5'>
                        <div className={classes.thumbInfo + ' ' + classes.thumblistView}>
                          <h3 className={classes.thumbCurrent}>Current Selection</h3>
                          <h3 className={classes.thumbTitle}><a href="#">Template Name </a></h3>
                         
                            <a className={classes.link + ' ' + classes.cursor} onClick={handleShow2}>
                            <span>Browse Theme </span>  <FontAwesomeIcon icon={faAngleRight}  />
                            </a>
                       
                          
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className={`row` + ' ' + classes.formGroup}>
                <div className='col-md-4'>
                  <label>Cover Image</label>
                </div>
                <div className='col-md-8'>
                    <div className={`mb-2`+ ' '  + classes.formControl}>
                      <label className={form.chkWrap} onChange={()=>setShow(!show)}>
                        <input type="checkbox" defaultChecked={true}/> <span className={form.chkmark}   >Image</span>
                      </label>
                      {
                      show && <div className={classes.toggleContent}>
                        <ul className={classes.imgLIst}>
                          <li className={classes.active}>
                              <label>
                              <Image
                                  src={ThumbList}
                                  height={90} width={90} alt="Thumbs"
                              />
                              <input type="radio" name="selectcollectionbg" defaultChecked={true} />
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
                              <label className={classes.addImg}>
                                <input type="file" />
                              <FontAwesomeIcon icon={faPlus}  />
                              </label>
                          </li>
                        </ul>
                        <div className={`row` + ' ' + classes.imageStyleSelect}>
                          <div className='col-md-6'>
                            <label>Image Adjustment</label>
                          </div>
                          <div className='col-md-6'>
                            <select className={`form-select` + ' ' +form.selectDropArrow}>
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
                    <div className={ classes.formControl}>
                      <label className={form.chkWrap} onChange={()=>setShow2(!show2)}>
                          <input type="checkbox"  defaultChecked={true}/> <span className={form.chkmark}>Color</span>
                      </label>
                      {
                        show2 && <div className={classes.toggleContent}>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#solid21">Soild</a>
                            </li>
                            <li className="nav-item">
                                <a className={nav.navLink} data-bs-toggle="tab" href="#gredient21">Gradient</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane show active " id="solid21">
                            <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                                <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                                <input type="text" placeholder='#05FF44' className="form-control" />                            
                            </div>
                            </div>
                            <div className="tab-pane fade" id="gredient21">
                            <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                                <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                            </div>
                            </div>
                        </div>
                        </div> 
                      }
                    </div>
                </div>
              </div>

              <div className={`row` + ' ' + classes.formGroup}>
                <div className='col-md-4'>
                  <label>Background Image</label>
                </div>
                <div className='col-md-8'>
                  <div className={`mb-3`+ ' '  + classes.formControl}>
                  <label className={form.chkWrap} onChange={()=>setShow3(!show3)}>
                      <input type="checkbox" /> <span className={form.chkmark}>Image</span>
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
                          <label>
                              <Image
                              src={ThumbList}
                              height={90} width={90} alt="Thumbs"
                              />
                              <input type="radio" name="selectcollectionbg" />
                          </label>
                          </li>
                          <li>                  
                          <label className={classes.addImg}>
                            <input type="file" />
                              <FontAwesomeIcon icon={faPlus}  />
                          </label>                  
                          </li>
                      </ul>
                      </div>
                  }

                  </div>
                  <div className={`mb-2`+ ' '  + classes.formControl}>
                    <label className={form.chkWrap} onChange={()=>setShow4(!show4)}>
                      <input type="checkbox"/> <span className={form.chkmark}>Color</span>
                    </label>
                    { 
                      show4 &&
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
                                      <input type="text" placeholder="#05FF44" className="form-control" />                            
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
                    }
                  </div>
                </div>
              </div>

              <div className={classes.sectionGroup}>
                <div className={classes.titleWrap}>
                  <h2 className={classes.title}>Typography</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`row` + ' ' + classes.formGroup}>
                  <div className='col-md-4'>
                    <label>Font Family : Heading</label>
                  </div>
                  <div className='col-md-6'>
                      <div className={classes.formControl} variant="primary" onClick={handleShow}>
                        <label className={'d-block' + ' ' + classes.modalLabel} style={{cursor:"pointer"}}>
                          Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                  </div>
                </div>
                <div className={`row` + ' ' + classes.formGroup}>
                  <div className='col-md-4'>
                    <label>Font Family : Text Body</label>
                  </div>
                  <div className='col-md-6'>
                    <div className={classes.formControl} variant="primary" onClick={handleShow}>
                      <label className={'d-block' + ' ' + classes.modalLabel} style={{cursor:"pointer"}}>
                          Select font Family <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.sectionGroup}>
                <div className='d-flex flex-wrap align-items-center justify-content-between'>
                  <div className={classes.titleWrap}>
                    <h2 className={classes.title}>Color</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
            
                    <a className={`ml-auto` + ' ' + classes.link + ' ' + classes.cursor} onClick={handleShow3}>
                    <span>Edit Color </span>  <FontAwesomeIcon icon={faAngleRight}  />
                    </a>
            
                </div>
                <div className={classes.colWrap}>
                    <div className={classes.cols}>
                        <h3>Primary </h3>
                        <span className={classes.colorPrimaryMain + ' ' + classes.colThumb}></span>
                        <div>$color-primary-main<br/>#4400CD
                        </div>
                    </div>
                    <div className={classes.cols}>
                        <h3>Secondary </h3>
                        <span className={`${classes.colorSecondaryMain + ' ' + classes.colThumb }`}></span>
                        <div>$color-secondary-main<br/>#00CCA9
                        </div>
                    </div>
                    <div className={classes.cols}>
                        <h3>Button </h3>
                        <span className={` ${classes.colorButton + ' ' + classes.colThumb} `}></span>
                        <div>$color-button<br/>#DDF0FE
                        </div>
                    </div>
                    <div className={classes.cols}>
                        <h3>Title Text  </h3>
                        <span className={` ${classes.titleTextColor + ' ' + classes.colThumb}`}></span>
                        <div>
                        $title-text-color<br/>#3A3A43
                        </div>
                    </div>
                    <div className={classes.cols}>
                        <h3>Body Text </h3>
                        <span className={` ${classes.bodyTextColor + ' ' + classes.colThumb}`}></span>
                        <div>
                        $body-text-color<br/>#5F5F6D
                        </div>
                    </div>
                </div>
              </div>
              

                        
                        
            </div>
          </div>
          <div className={classes.formGroup}>
            <div className='d-flex flex-wrap justify-content-end'>
              <div className={classes.btnsGroup}>
              <button className={`btn ${button.btnOutlinePrimary}`}>Cancel</button>
              <button className={`btn ${button.btnPrimary}`}>Save Draft</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>

       

    </PagesAuth>

    <Modal show={modalShow2} onHide={handleClose2} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className={classes.modalLg}>

      <Modal.Body>
            <div className={classes.titleWrap + ' ' + classes.textCenter} style={{textAlign:"left"}}>
              <h2 className={classes.title}>Please select profile theme</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           

          <Pagination />

           
      </Modal.Body>
    </Modal>

    <Modal show={modalShow} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className={classes.modalLg}>
      <Modal.Header closeButton style={{border:"none",paddingBottom:0}}>
        <Modal.Title>&nbsp;</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className={classes.titleWrap} style={{textAlign:"left"}}>
              <h2 className={classes.title}>Selelct Typography</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={`row`+ ' ' + classes.formGroup}>
              <div className={`col-md-6`+ ' ' + classes.formGroup + ' ' + classes.search}>
                <div className={classes.searchModal}>
                  <button className={'btn'}><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
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
                  <label className={classes.checkitem}>
                    <input type="checkbox" defaultChecked={true}/>
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
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
    </Modal>

    <Modal show={modalShow3} onHide={handleClose3} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className={classes.modalLg}>
      <Modal.Header closeButton style={{border:"none",paddingBottom:0}}>
        <Modal.Title>&nbsp;</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.titleWrap} style={{textAlign:"left"}}>
          <h2 className={classes.title}>Selelct Typography</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='row'>
          <div className='col-md-9 mx-auto'>
            <div className={`row` + ' ' + classes.formGroup}>
              <div className='col-md-6'>
                <label>Title text color</label>
              </div>
              <div className='col-md-6'>
                
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
                            <input type="text" placeholder="#05FF44" className="form-control" />                            
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
              <div className='col-md-6'>
                <label>Body text Color</label>
              </div>
              <div className='col-md-6'>
            
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
                              <input type="text" placeholder="#05FF44" className="form-control" />                            
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
              <div className='col-md-6'>
                <label>Button Background Color</label>
              </div>
              <div className='col-md-6'>
              
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
                          <input type="text" placeholder="#05FF44" className="form-control" />                            
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
              <div className='col-md-6'>
                <label>Button Border Color</label>
              </div>
              <div className='col-md-6'>
          
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
                            <input type="text" placeholder="#05FF44" className="form-control" />                            
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
              <div className='col-md-6'>
                <label>Slide Button Color</label>
              </div>
              <div className='col-md-6'>
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
                            <input type="text" placeholder="#05FF44" className="form-control" />                            
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
          </div>
        </div>

        <div className={classes.formGroup}>
          <div className='d-flex flex-wrap justify-content-end'>
            <div className={classes.btnsGroup}>
            <button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose3} >Cancel</button>
            <button className={`btn ${button.btnPrimary}`} onClick={handleClose3} >Save Draft</button>
            </div>
          </div>
        </div>
         

       

           
      </Modal.Body>
    </Modal>
 
    </>
  );
}
