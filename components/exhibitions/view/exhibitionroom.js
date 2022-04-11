import React, {useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image"

import nav from '../../../public/exhibitions/tabnav.module.scss';
import Pagination from '../../../components/common/pagination.js';
import style from '../../../public/exhibitions/index.module.scss';
import classes from '../../../components/exhibitions/view/exhibitionroom.module.scss';

import Thumbs from '../../../public/exhibitions/images/thumblist5.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ExhibitionRoom = () => {
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
      <div className={style.titleWrap + ' ' + style.textCenter}>
        <h1 className={style.title}>Exhibition Room</h1>
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
          
          <div className={classes.thumblist + ' ' + classes.active}>
            <div className={classes.thumbImg}>
              <Link className={classes.thumbsItem} href="/">
                <a><Image
                  src={Thumbs}
                  height={377}
							    width={1056}
                  alt="Thumbs"
                  />
                </a>							
              </Link>
              <div className={classes.checkitem}>
                <input type="checkbox"/>
                <span className={classes.checkicon}>                   
                <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                </span>
              </div>
            </div>
            <div className={classes.thumbInfo}>                 
              <h3 className={classes.thumbTitle}>
                <Link href="/"><a>Template Name (Default) </a></Link>
              </h3>
              <div className={classes.btnGroup}>
                <button className={`btn btn-default `+ classes.btn}>
                  <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                  Preview
                </button>
                <button className={`btn btn-default `+ classes.btn}>
             
                  Current Template
                </button>
              </div>
            </div>
          </div>
         

          <Pagination />

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

export default ExhibitionRoom;
