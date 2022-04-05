import React from 'react';

import nav from '../../../public/collections/tabnav.module.scss';

import classes from '../view/customizestyle.module.scss';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faAngleRight, faEye, faSearch, faFont } from '@fortawesome/free-solid-svg-icons';
  

const StepCustomizeStyle = () => {


  return (
    <>  
        <div className={`text-center`+ ' ' + classes.titleWrap}>
          <h1 className={classes.title}>Customize collection style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Heading</label>
          </div>
          <div className='col-md-4'>
              <div className={classes.formControl} variant="primary" >
                <label>
                  Open Sea  
                </label>
              </div>
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Font Family : Text Body</label>
          </div>
          <div className='col-md-4'>
            <div className={classes.formControl} variant="primary">
              <label>
                 Open Sea
              </label>
            </div>
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
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
        <div className={`row` + ' ' + classes.formGroup}>
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
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Button Background Color</label>
          </div>
          <div className='col-md-4'>
            <div className={classes.selectedImg}>
              <div className={`input-group colorpicker-component colorpicker-element`}>
                  <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
              </div>
            </div>
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Button Border Color</label>
          </div>
          <div className='col-md-4'>
      
            <div className={classes.selectedImg}>
                <div className={`input-group colorpicker-component colorpicker-element`}>
                    <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                </div>
            </div>
           
          </div>
        </div>
        <div className={`row` + ' ' + classes.formGroup}>
          <div className='col-md-4'>
            <label>Slide Button Color</label>
          </div>
          <div className='col-md-4'>
            <div className={classes.selectedImg}>
                <div className={`input-group colorpicker-component colorpicker-element`}>
                    <span className={`form-control` + ' ' + nav.colorBg} style={{background:"linear-gradient(270.37deg, #57DF96 0.36%, #6D86F1 47.48%, #BF6CFC 96.61%)"}}></span>
                </div>
            </div> 
          </div>
        </div>
        
    </>
  );
}

export default StepCustomizeStyle;
