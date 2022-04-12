import React, { useEffect } from 'react';
import Image from "next/image"

import nav from '../../../public/exhibitions/tabnav.module.scss';
import classes from '../../../components/exhibitions/view/exhibitioninfo.module.scss';

import ThumbList from '../../../public/exhibitions/images/thumb.png';


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
      <div className={classes.titleWrap + ' ' + classes.textCenter}>
        <h1 className={classes.title}>Exhibition Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Exhibition Thumbnail</label>
        </div>
        <div className='col-md-8'>
          <div className={ classes.formGroup}>
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
          <div className={ classes.formGroup}>
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

      <div className={`row` + ' ' + classes.formGroup}>
        <div className='col-md-4'>
          <label>Thumbnail Description</label>
        </div>
        <div className='col-md-8'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tri  tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tris...</p>
        </div>
      </div>

        
        
    </>
  );
}

export default ExhibitionInfo;
