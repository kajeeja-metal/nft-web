import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"

import style from '../../../public/collections/view/view.module.scss';
import classes from '../../../components/collections/view/theme.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Theme1 from '../../../public/collections/images/theme1.png';


const StepTheme = () => {
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
      <div className={style.titleWrap}>
        <h1 className={style.title}>Theme</h1>
        <p>Personalise your colllection’s layout, colour and background</p>
      </div>

 
      <div className="tab-content">

        <div className="tab-pane show active" id="category1">
          <div className='row'>

            <div className='col-md-4'> 
              <div className={classes.thumblist + ' ' + classes.thumblistView}>
                <div className={classes.thumbImg}>
                  <Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                  <div className={classes.checkitem}>
                    <input type="checkbox"/>
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'> 
              <div className={classes.thumblist + ' ' + classes.thumblistView}>
                <div className={`px-0` + ' ' + classes.thumbInfo}> 
                  <h3 className={classes.thumbCurrent}>Current Selection</h3>                
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="tab-pane fade" id="category2">
            <h2>Category 2</h2>
        </div>

        <div className="tab-pane fade" id="category3">
            <h2>Category 3</h2>
        </div>

      </div>
        
    </>
  );
}

export default StepTheme;
