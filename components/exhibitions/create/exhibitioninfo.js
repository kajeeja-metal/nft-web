import React, { useEffect, useState } from 'react';

import Image from "next/image"

import Form from '../../../public/account/Form.module.scss';
import classes from '../../../components/exhibitions/create/exhibitioninfo.module.scss';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  
  const [show,setShow] = useState(true);

  // useEffect(() => {
  //     document.querySelector("body").classList.add("steptheme");
  // });



  return (
    <>  
      <div className={classes.titleWrap + ' ' + classes.textCenter}>
        <h1 className={classes.title}>Exhibition Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Exhibition Thumbnail</label>
        </div>
        <div className='col-md-8'>
            <div className={`mb-2`+ ' '  + classes.formControl}>
              <label className={Form.chkWrap} onChange={()=>setShow(!show)}>
                <input type="checkbox" defaultChecked={true}/> <span className={Form.chkmark}   > Select Image</span>
              </label>
              {
                show &&
                <div className={classes.toggleContent}>
                  <ul className={classes.imgLIst} style={{"marginBottom":0}}>
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
              }
              
              
            </div>
            
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Exhibition Name</label>
        </div>
        <div className='col-md-8'>
            <input type="text" className={Form.formElements} placeholder='Name ...  ' />
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Description</label>
        </div>
        <div className='col-md-8'>
            <textarea type="text" className={Form.formElements} placeholder='Optional ... ' rows="6" ></textarea>
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>    
        
    </>
  );
}

export default ExhibitionInfo;
