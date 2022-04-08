
import ExhibitionSidebar from '../../../../components/exhibitions/exhibitions001/edit/sidebar';
import ExhibitionRoom from '../../../../components/exhibitions/exhibitions001/edit/exhibitionroom';
import ExhibitionInfo from '../../../../components/exhibitions/exhibitions001/edit/exhibitioninfo';
import ExhibitionStyle from '../../../../components/exhibitions/exhibitions001/edit/exhibitionstyle';

import classes from '../../../../public/exhibitions/exhibitions001/edit/edit.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEye, faGlobe  } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";

export default function Index() {
  const [page, setPage] = useState(0);
  const FormTitles = ["Exhibition Room", "Exhibition Info", "Customize Exhibition Style"]
  const ExhibitionDisplay = () => {
    if (page === 0) {
      return <ExhibitionRoom />;
    } 
    else if (page === 1) {
      return <ExhibitionInfo  />;
    } 
    else {
      return <ExhibitionStyle />;
    }
  };
  return ( 
    <>  
       
        <div className={classes.progressbar}>
          <div className='container'>
            <div className={classes.progressInner}>
              <div className={classes.backThemename}>
                <button className='btn btn-default'
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
                  <button className='btn btn-outline-danger'>
                    Draft  
                  </button>
                  {/* <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                    Publishing  
                  </button> */}
                </div>
                <button className='btn btn-default'>
                <FontAwesomeIcon icon={faEye} className={classes.faeye} /> Preview  
                </button>
                <button className='btn btn-default'>
                  Save 
                </button>
                <button className='btn btn-primary'
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("Finished");
                      console.log("formData");
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                > <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} /> 
                  {page === FormTitles.length - 1 ? "Submit" : "Publish"}
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
              <ExhibitionSidebar />
            </div>
            <div className='col-md-9'>
              
              <div className='form'>
                <div className='boty'>
                  {ExhibitionDisplay()}
                </div>
                
                
              </div>
           
            </div>
          </div>
        </div>
      
        
    </>
  );
}
