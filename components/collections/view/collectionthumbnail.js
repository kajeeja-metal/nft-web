import React from 'react';
import Image from "next/image";
import nav from '../../../public/collections/tabnav.module.scss';
import classes from '../view/collectionthumbnail.module.scss';
import style from '../../../public/collections/create/create.module.scss';

import ThumbList from '../../../public/collections/images/thumblist.png';

const StepCollectionThumbnail = () => {

  return (
    <>  
        
      <div className={`text-center`+ ' ' + style.titleWrap}>
        <h1 className={style.title}>Please enter collection thumbnail info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>     

      <div className={`row` + ' ' + style.formGroup}>
        <div className='col-md-4'>
          <label>Thumbnail image</label>
        </div>
        <div className='col-md-8'>
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

      <div className={`row` + ' ' + style.formGroup}>
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

export default StepCollectionThumbnail;
