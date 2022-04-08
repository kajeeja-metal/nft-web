
import ExhibitionSidebar from '../../../../components/exhibitions/exhibitions001/create/sidebar';
import ExhibitionRoom from '../../../../components/exhibitions/exhibitions001/create/exhibitionroom';
import ExhibitionInfo from '../../../../components/exhibitions/exhibitions001/create/exhibitioninfo';
import ExhibitionStyle from '../../../../components/exhibitions/exhibitions001/create/exhibitionstyle';

import classes from '../../../../public/exhibitions/exhibitions001/create/create.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight  } from '@fortawesome/free-solid-svg-icons';

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
              <button className='btn btn-default'
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              
              <div className={`progress` + ' ' + classes.progress} >           
                <div className={`progress-bar bg-success` + ' ' + classes.progressBarbg} style={{ width: page === 0 ? "33%" : page === 1 ? "66%" : "100%" }}></div>
                
              </div>
              
              <button className='btn btn-outline-primary'>
                save draft
              </button> &nbsp;
              <button className='btn btn-primary'
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("Finished");
                    console.log("formData");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"} &nbsp;
                <FontAwesomeIcon icon={faAngleRight} className="faAngleRight" />
              </button>
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
