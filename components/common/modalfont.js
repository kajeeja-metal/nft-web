import React, {useEffect, useState} from 'react';

import button from '../../../public/account/Buttons.module.scss';

import Pagination from '../../../components/common/paginationtotal.js';
import style from '../../../public/collections/index.module.scss';
import classes from '../create/customizestyle.module.scss';

import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleRight, faEye, faSearch, faFont } from '@fortawesome/free-solid-svg-icons';
  

const Modalfont = () => {
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

        <Pagination />          
        </Modal.Body>
      </Modal>
        
    </>
  );
}

export default Modalfont;
