import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"

import nav from '../../../../public/exhibitions/exhibitions001/tabnav.module.scss';
import paging from '../../../../public/exhibitions/exhibitions001/pagination.module.scss';
import cstyle from '../../../../public/exhibitions/exhibitions001/index.module.scss';
import classes from '../../../../components/exhibitions/exhibitions001/create/exhibitioninfo.module.scss';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheckCircle, faPlus } from '@fortawesome/free-regular-svg-icons';

import ThumbList from '../../../../public/exhibitions/exhibitions001/images/thumb.png';
import CoverList from '../../../../public/exhibitions/exhibitions001/images/covercrop.png';
import CoverList2 from '../../../../public/exhibitions/exhibitions001/images/covercrop2.png';
import CoverList3 from '../../../../public/exhibitions/exhibitions001/images/covercrop3.png';
import CoverList4 from '../../../../public/exhibitions/exhibitions001/images/covercrop4.png';




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
      <div className={cstyle.titleWrap}>
        <h1 className={cstyle.title}>Exhibition Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Exhibition Thumbnail</label>
        </div>
        <div className='col-md-8'>
            <div className={`mb-2`+ ' '  + classes.formControl}>
              <label className={classes.toggleTitle}>
                 <span>Select Image</span>
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
            
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Exhibition Name</label>
        </div>
        <div className='col-md-8'>
            <input type="text" className='form-control' placeholder='Name ...  ' />
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Description</label>
        </div>
        <div className='col-md-8'>
            <textarea type="text" className='form-control' placeholder='Optional ... ' rows="6" ></textarea>
            <p className={`text-right` + ' ' + classes.leftnumber}>15/80</p>
        </div>
      </div>    
        
    </>
  );
}

export default ExhibitionInfo;
