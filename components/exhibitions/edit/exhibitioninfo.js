import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"

import nav from '../../../public/exhibitions/tabnav.module.scss';
import button from '../../../public/account/Buttons.module.scss';
import form from '../../../public/account/Form.module.scss';
// import Pagination from '../../../components/common/pagination.js';
import style from '../../../public/exhibitions/index.module.scss'; 
import classes from '../../../components/exhibitions/edit/exhibitioninfo.module.scss';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-regular-svg-icons';

import ThumbList from '../../../public/exhibitions/images/thumb.png';
import CoverList from '../../../public/exhibitions/images/covercrop.png';
import CoverList2 from '../../../public/exhibitions/images/covercrop2.png';
import CoverList3 from '../../../public/exhibitions/images/covercrop3.png';
import CoverList4 from '../../../public/exhibitions/images/covercrop4.png';


const ExhibitionInfo = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  // useEffect(() => {
  //     document.querySelector("body").classList.add("steptheme");
  // });



  return (
    <>  
      <div className={style.titleWrap}>
        <h1 className={style.title}>Exhibition Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Thumbnail image*</label>
        </div>
        <div className='col-md-8'>
          <div className={`mb-2`+ ' '  + style.formControl}>
            <label className={classes.toggleTitle + ' ' + form.chkWrap}>
              <input type="checkbox" />  
              <span className={ form.chkmark}> Select Image</span>
            </label>
            <div className={classes.toggleContent}>
              <ul className={classes.imgLIst} style={{"marginBottom":0}}>
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
              <p className={classes.recomendSize} style={{"paddingLeft":15}}>Recommended image size: 1600 x 360px</p>
              <hr/>
              <h3 className={classes.decideLbl}>Decide how to crop your image</h3>
              <div className={classes.cropStyleImgWrap}>
            
                <div className={classes.cropStyleImg  + ' ' + classes.active} data-value="fillVertical">
                  <span className={classes.cropImg}>
                    <Image
                      src={CoverList}
                      height={52} width={52} alt="Thumbs"
                    />
                  </span>
                  <h4 className={classes.crop}>Fill the frame vertically</h4>
                </div>               
            
                <div className={classes.cropStyleImg} data-value="fillHorizontal">
                  <span className={classes.cropImg}>
                    <Image
                      src={CoverList2}
                      height={69} width={100} alt="Thumbs"
                    />
                  </span>
                  <h4 className={classes.crop}>Fill the frame horizontally</h4>
                </div>
              
                <div className={classes.cropStyleImg} data-value="fillCover">
                  <span className={classes.cropImg}>
                    <Image
                      src={CoverList3}
                      height={100} width={100} alt="Thumbs"
                    />
                  </span>
                  <h4 className={classes.crop}>Cover the frame</h4>
                </div>
            
                <div className={classes.cropStyleImg} data-value="fillOriginal">
                  <span className={classes.cropImg}>
                    <Image
                      src={CoverList4}
                      height={100} width={100} alt="Thumbs"
                    />
                  </span>
                  <h4 className={classes.crop}>Original size</h4>
                </div>
              
              </div>
            </div>
            
            
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
                        <span className={`form-control` + ' ' + nav.colorBg} style={{background:"#008F76"}}></span>
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



      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Description</label>
        </div>
        <div className='col-md-8'>
            <textarea type="text" className={form.formElements} placeholder='Optional ... ' rows="6"  value="DeCreated by SoundMint
KLOUD is the artistical embodiment of limitless creativity in anonymity. With this NFT drop, the collector enters the KLOUD, owning a unique visual & musical art piece derived from the generative algorithm that is KLOUD x HOOKER x COMPUTER. Holding one of these NFTs grants future access to  ....."></textarea>
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>  

      <div className={classes.formGroup}>
        <div className='d-flex justify-content-between'>
          <a className={'btn' + ' ' + button.btnTextDanger}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
          <div className={style.btnGroup}>
            <button type="button" className={'btn' + ' ' + button.btnDanger}> Cancel</button>
            <button type="button" className={'btn' + ' ' + button.btnPrimary}>Save Draft</button>
          </div>
        </div>
      </div>  
        
    </>
  );
}

export default ExhibitionInfo;
