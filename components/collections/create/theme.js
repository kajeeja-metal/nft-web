import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"

import Pagination from '../../../components/common/pagination.js';
import nav from '../../../public/collections/tabnav.module.scss';
import button from '../../../public/account/Buttons.module.scss';
import classes from '@/components/collections/create/theme.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Theme1 from '../../../public/collections/images/theme1.png';
import Theme2 from '../../../public/collections/images/theme2.png';
import Theme3 from '../../../public/collections/images/theme3.png';

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
      <div className={classes.titleWrap + ' ' + classes.textCenter}>
        <h1 className={classes.title}>Please select collection theme</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <ul className={`nav nav-tabs `+ classes.tab}>
        <li className="nav-item">
          <a className={nav.navLink + ' ' + nav.active}  data-bs-toggle="tab" href="#category1">Category A</a>
        </li>
        <li className="nav-item">
          <a className={nav.navLink} data-bs-toggle="tab" href="#category2">Category B</a>
        </li>
        <li className="nav-item">
          <a className={nav.navLink} data-bs-toggle="tab" href="#category3">Category C</a>
        </li>
      </ul>

      <div className="tab-content">

        <div className="tab-pane show active" id="category1">
          <div className='row'>

            <div className='col-6 col-md-4'> 
              <div className={classes.thumblist + ' ' + classes.active}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" defaultChecked={true} />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name (Default)</a></Link>
                  </h3>                  
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnDefault + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                     Current Template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme2}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name</a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnPrimary + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme3}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnPrimary + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme3}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnPrimary + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name</a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnPrimary + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <label className={classes.checkitem + ' ' + classes.customChk }>
                    <Image
                      src={Theme3}
                      height={376}
                      width={376}
                      alt="Thumbs"
                    />                  
                    <input type="checkbox" />
                    <span className={classes.checkicon}>                   
                    <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                    </span>
                  </label>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn ${button.btnOutlinePrimary + ' ' + classes.btn}`}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn ${button.btnPrimary + ' ' + classes.btn}`}>
                     <input type="radio" name="themeselect" />
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <Pagination />

         
            
          <div className={classes.formGroup + ' ' + classes.btnsGroup + ' ' + classes.textRight }>
            <button className={`btn ${button.btnOutlinePrimary}`}>Cancel</button>
            <button className={`btn ${button.btnPrimary}`}>Save</button>
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
