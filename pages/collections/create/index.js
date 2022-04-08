import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight  } from '@fortawesome/free-solid-svg-icons';
import button from '../../../public/account/Buttons.module.scss';

import StepSidebar from '../../../components/collections/create/sidebar';
import StepTheme from '../../../components/collections/create/theme';
import StepCollectionInfo from '../../../components/collections/create/collectioninfo';
import StepCollectionThumbnail from '../../../components/collections/create/collectionthumbnail';
import StepCollectionAssets from '../../../components/collections/create/collectionassets';
import StepCustomizeStyle from '../../../components/collections/create/customizestyle';


import classes from '../../../public/collections/create/create.module.scss';

import React, { useState } from "react";

export default function Index() {
  const [page, setPage] = useState(0);
  const FormTitles = ["step 1", "step 2", "step 3", "step 4", "step 5"]
  const StepDisplay = () => {
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
              <button className={`btn ${button.btnOutlinePrimary}`}
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              
              <div className={`progress` + ' ' + classes.progress} >           
                <div className={`progress-bar bg-success` + ' ' + classes.progressBarbg} style={{ width: page === 0 ? "0%" : page === 1 ? "25%" : page === 2 ? "50%" : page === 3 ? "75%"  : "100%" }}></div>
                
              </div>

              <button className={`btn ${button.btnSecondary}`}
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("Finished");
                    console.log("formData");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Save" : "Next"}
                &nbsp;
                <FontAwesomeIcon icon={faAngleRight} className="faAngleRight" />
              </button>
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
                  {StepDisplay()}
                </div>
                
                
              </div>
              {/* <StepTheme /> */}
               {/* <StepCollectionInfo /> 
              <StepCollectionThumbnail />
              <StepCollectionAssets />
              <StepCustomizeStyle/> */}
            </div>
          </div>
        </div>
      
        
    </>
  );
}
