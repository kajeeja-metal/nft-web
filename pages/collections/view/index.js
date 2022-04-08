import button from '../../../public/account/Buttons.module.scss';
import StepSidebar from '../../../components/collections/create/sidebar';
import StepTheme from '../../../components/collections/view/theme';
import StepCollectionInfo from '../../../components/collections/view/collectioninfo';
import StepCollectionThumbnail from '../../../components/collections/view/collectionthumbnail';
import StepCollectionAssets from '../../../components/collections/view/collectionassets';
import StepCustomizeStyle from '../../../components/collections/view/customizestyle';
import classes from '../../../public/collections/view/view.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEye, faGlobe, faPen } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";

export default function Index() {
  const [page, setPage] = useState(0);
  const FormTitles = ["My Theme", "My Collections", "Collection thumbnail info", "My Assets", "Customize collection style"]
  const ViewDisplay = () => {
    if (page === 0) {
      return <StepTheme />;
    } 
    else if (page === 1) {
      return <StepCollectionInfo  />;
    } 
    else if (page === 2) {
      return <StepCollectionThumbnail  />;
    } 
    else if (page === 3) {
      return <StepCollectionAssets  />;
    } 
    else {
      return <StepCustomizeStyle />;
    }
  };
  return ( 
    <>  
       
        <div className={classes.progressbar}>
          <div className='container'>
            <div className={classes.progressInner}>
              <div className={classes.backThemename}>
                <button className={`btn ${button.btnOutlinePrimary}`}
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                <FontAwesomeIcon icon={faAngleLeft} className={classes.faAngleLeft} /></button>
                <h2>Collection Settings: {FormTitles[page]}</h2>
              </div>
              
             <div className={classes.headerBtnGroup}>
                <div className={classes.statusButton}>
                  <span>Status:</span>
                  <button className={`btn ${button.btnOutlineDanger}`}>
                    <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                    Unpublish  
                  </button>
                  {/* <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                    Publishing  
                  </button> */}
                </div>
                <button className={`btn ${button.btnOutlinePrimary}`}>
                <FontAwesomeIcon icon={faEye} className={classes.faeye} /> Preview  
                </button>
                <button className={`btn ${button.btnOutlinePrimary}`}>
                  <FontAwesomeIcon icon={faPen} className={classes.faPen} />  
                   Edit  
                </button>
                <button className={`btn ${button.btnPrimary}`} 
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("Finished");
                      console.log("formData");
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                > <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} /> 
                  {page === FormTitles.length - 1 ? "Save" : "Publish"}
                </button>
                {/* <button className='btn btn-danger'>
                   <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                     Unpublish
                </button> */}
             </div>
              
            </div>
          </div>          
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <StepSidebar />
            </div>
            <div className='col-md-9'>
              
              <div className='form'>

                {/* <div className='header'>
                  <h1>{FormTitles[page]}</h1>
                </div> */}
                <div className='boty'>
                  {ViewDisplay()}
                </div>
                
                
              </div>
             
            </div>
          </div>
        </div>
      
        
    </>
  );
}
