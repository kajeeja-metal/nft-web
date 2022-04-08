import React, { useEffect, useState } from 'react';
import Image from "next/image";
import nav from '../../../public/collections/tabnav.module.scss';
import button from '../../../public/account/Buttons.module.scss';
import form from '../../../public/account/Form.module.scss';
import classes from '../create/collectioninfo.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ThumbList from '../../../public/collections/create/images/thumb.png';

const StepCollectionInfo = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const [show,setShow] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(true);
  const [show4,setShow4] = useState(false);

  return (
    <>  

       
      <div className={classes.titleWrap}>
        <h1 className={classes.title}>Please enter collection info</h1>
        <p>Personalise your profile’s colour, background, and theme.</p>
      </div>
       

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Collection Cover</label>
        </div>
        <div className='col-md-8'>
            <div className={`mb-2`+ ' '  + classes.formControl}>
              <label className={form.chkWrap} onClick={()=>setShow(!show)}>
                <input type="checkbox" /> <span className={form.chkmark}>Image</span>
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
                </div>
              }
              
            </div>
            <div className={ classes.formControl}>
              <label className={form.chkWrap} onClick={()=>setShow2(!show2)}>
                <input type="checkbox"/> <span className={form.chkmark}>Color</span>
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
                          <input type="text" value="#05FF44" className="form-control" />                            
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
          <label>Collection Name*</label>
        </div>
        <div className='col-md-8'>
            <input type="text" className={form.formElements} placeholder='Name ...  ' />
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Collection Description</label>
        </div>
        <div className='col-md-8'>
            <textarea type="text" className={form.formElements}  placeholder='Optional ... ' rows="6" ></textarea>
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Collection Background Image</label>
        </div>
        <div className='col-md-8'>
          <div className={`mb-3`+ ' '  + classes.formControl}>
            <label className={form.chkWrap} onClick={()=>setShow3(!show3)}>
                <input type="checkbox" checked/> <span className={form.chkmark}>Select Image</span>
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
                    <select className={form.formElements}>
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
          <div className={`mb-2`+ ' '  + classes.formControl}>
            <label className={form.chkWrap} onClick={()=>setShow4(!show4)}>
                <input type="checkbox"/> <span className={form.chkmark}>Color Fill</span>
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
            }
          </div>
        </div>
      </div>

      <div className={ classes.formGroup}>
        <a className={`btn ${button.btnTextDanger}`}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
      </div>

        
    </>
  );
}

export default StepCollectionInfo;
