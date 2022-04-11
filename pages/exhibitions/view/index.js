
import ExhibitionSidebar from '../../../components/exhibitions/view/sidebar';
import ExhibitionRoom from '../../../components/exhibitions/view/exhibitionroom';
import ExhibitionInfo from '../../../components/exhibitions/view/exhibitioninfo';
import ExhibitionStyle from '../../../components/exhibitions/view/exhibitionstyle';

import button from '../../../public/account/Buttons.module.scss';
import classes from '../../../public/exhibitions/view/view.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faGlobe, faEye, faPen  } from '@fortawesome/free-solid-svg-icons';

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
                <button className={'btn' + ' ' + button.btnOutlinePrimary}
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
                  <button className={'btn' + ' ' + button.btnDanger}>
                    <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                    Unpublish  
                  </button>
                  {/* <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faGlobe} className={classes.faGlobe} />
                    Publishing  
                  </button> */}
                </div>
                <button className={'btn' + ' ' + button.btnOutlinePrimary}>
                <FontAwesomeIcon icon={faEye} className={classes.faeye} /> Preview  
                </button>
                <button className={'btn' + ' ' + button.btnOutlinePrimary}>
                  <FontAwesomeIcon icon={faPen} className={classes.faPen} />  
                   Edit  
                </button>
                <button className={'btn' + ' ' + button.btnPrimary}
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
                {/* <button className={'btn' + ' ' + button.btnDanger}>
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
