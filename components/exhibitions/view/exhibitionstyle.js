import React, {useEffect} from 'react';
import Image from "next/image"

import nav from '../../../public/exhibitions/tabnav.module.scss';
import style from '../../../public/exhibitions/index.module.scss';
import classes from '../view/exhibitionstyle.module.scss';
import ThumbList from '../../../public/exhibitions/images/thumb.png';
  
const ExhibitionStyle = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <>  
      <div className={style.titleWrap + ' ' + style.textCenter}>
        <h1 className={style.title}>Customize Exhibition Style</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>


      <div className={`row` + ' ' + style.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Heading</label>
          </div>
          <div className='col-md-4'>
              <div className={style.formControl} variant="primary" >
                <label>
                  Open Sea  
                </label>
              </div>
          </div>
        </div>
        <div className={`row` + ' ' + style.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Text Body</label>
          </div>
          <div className='col-md-4'>
            <div className={style.formControl} variant="primary">
              <label>
                 Open Sea
              </label>
            </div>
          </div>
        </div>
        <div className={`row` + ' ' + style.formGroup}>
          <div className='col-md-4'>
            <label>Title text color</label>
          </div>
          <div className='col-md-4'>             
            <div className={classes.selectedImg}>
              <div className={`input-group colorpicker-component colorpicker-element`}>
                  <span className={`form-control` + ' ' + nav.colorBg} style={{background:"#008F76"}}></span>                          
              </div>
            </div>              
          </div>
        </div>
        <div className={`row` + ' ' + style.formGroup}>
          <div className='col-md-4'>
            <label>Body text Color</label>
          </div>
          <div className='col-md-4'>
        
            <div className={classes.selectedImg}>
              <div className={`input-group colorpicker-component colorpicker-element`}>
                  <span className={`form-control` + ' ' + nav.colorBg} style={{background:"#008F76"}}></span>                          
              </div>
            </div> 
          
          </div>
        </div>
        <div className={`row` + ' ' + style.formGroup}>
          <div className='col-md-4'>
            <label>Background Image (Asset Page)</label>
          </div>
          <div className='col-md-4'>
          <div className={ style.formGroup}>
            <label className={`mb-2` + ' ' + classes.toggleTitle}>
              Image 
            </label>
            <div className={classes.selectedImg}>
              <span className={classes.selectedItemImg}>
                <Image
                  src={ThumbList}
                  height={90} width={90} alt="Thumbs"
                />                      
              </span>
            </div>
          </div>
          <div className={ style.formGroup}>
            <label className={`mb-2` + ' ' + classes.toggleTitle}>
            Color 
            </label>
            <div className={classes.selectedImg}>
              <div className={`input-group colorpicker-component colorpicker-element`}>
                  <span className={`form-control` + ' ' + nav.colorBg} style={{background:"#008F76"}}></span>                          
              </div>
            </div>
          </div>
          </div>
        </div>
     
        
    </>
  );
}

export default ExhibitionStyle;
