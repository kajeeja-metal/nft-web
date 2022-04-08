import React, {useEffect, useState} from 'react';
import Image from "next/image";
import nav from '../../../public/collections/tabnav.module.scss';
import classes from '../create/collectionthumbnail.module.scss';
import button from '../../../public/account/Buttons.module.scss';
import form from '../../../public/account/Form.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faPray } from '@fortawesome/free-solid-svg-icons';
import ThumbList from '../../../public/collections/thumblist/images/thumblist.png';

const StepCollectionThumbnail = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  const [show,setShow] = useState(true);
  const [show2,setShow2] = useState(false);
  return (
    <>  
      
      <div className={`text-center`+ ' ' + classes.titleWrap}>
        <h1 className={classes.title}>Please enter collection thumbnail info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>     

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Thumbnail image\</label>
        </div>
        <div className='col-md-8'>
          <div className={`mb-2` + ' ' + classes.formControl }>
            <label className={form.chkWrap} onClick={()=>setShow(!show)}>
              <input type="checkbox" checked /> <span className={form.chkmark}>Select Image</span>
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
                <p className={classes.recomoensizeLbl}>Recommended image size: 1600 x 360px</p>
              </div>
            }
            
          </div>
          <div className={classes.formControl }>
            <label className={form.chkWrap} onClick={()=>setShow2(!show2)}>
              <input type="checkbox" /> <span className={form.chkmark}>Color Fill</span>
            </label>
            { 
              show2 &&
              <div className={classes.toggleContent}>
                <div className={nav.colorpickertab}  >
            
                  <div className={classes.formControl}>
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#solid31">Soild</a>
                      </li>
                      <li className="nav-item">
                          <a className={nav.navLink} data-bs-toggle="tab" href="#gredient31">Gradient</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade " id="solid31">
                        <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                            <span className={`form-control` + ' ' + nav.colorBg} style={{background:"yellow"}}></span>
                            <input type="text" value="#05FF44" className="form-control" />                            
                        </div>
                      </div>
                      <div className="tab-pane show active" id="gredient31">
                        <div className={`input-group colorpicker-component colorpicker-element` + ' ' + nav.colorElement}>
                          <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                        </div>
                      </div>
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
          <label>Thumbnail Description</label>
        </div>
        <div className='col-md-8'>
            <textarea type="text" className={form.formElements} placeholder='Optional ... ' rows="6" ></textarea>
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>

      <div className={`btns-group mb-3 ${classes.textRight}` } style={{ "textAlign":"right"}}>
          <button className={`btn ${button.btnOutlinePrimary}`} style={{"margin-right":8}}>Cancel</button>
          <button className={`btn ${button.btnPrimary}`}>Save Draft</button>
      </div>

    </>
  );
}

export default StepCollectionThumbnail;
