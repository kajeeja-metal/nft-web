import React, {useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image"

import nav from '../../../../public/exhibitions/exhibitions001/tabnav.module.scss';
import paging from '../../../../public/exhibitions/exhibitions001/pagination.module.scss';
import cstyle from '../../../../public/exhibitions/exhibitions001/index.module.scss';
import classes from '../../../../components/exhibitions/exhibitions001/create/exhibitionroom.module.scss';

import Thumbs from '../../../../public/exhibitions/exhibitions001/images/thumblist5.png';
import Thumbs2 from '../../../../public/exhibitions/exhibitions001/images/thumblist6.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';

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
      <div className={cstyle.titleWrap}>
        <h1 className={cstyle.title}>Exhibition Room</h1>
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
                <button className={`btn btn-primary `+ classes.btn}>
                  <input type="radio" name="themeselect" />
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className={classes.thumblist}>
            <div className={classes.thumbImg}>
              <Link className={classes.thumbsItem} href="/">
                <a><Image
                  src={Thumbs2}
                  height={377}
							    width={1056}
                  alt="Thumbs"
                  />
                </a>							
              </Link>
            </div>
            <div className={classes.thumbInfo}>                 
              <h3 className={classes.thumbTitle}>
                <Link href="/"><a>Classic Gallery </a></Link>
              </h3>
              <div className={classes.btnGroup}>
                <button className={`btn btn-default `+ classes.btn}>
                  <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                  Preview
                </button>
                <button className={`btn btn-primary `+ classes.btn}>
                  <input type="radio" name="themeselect" />
                  Select
                </button>
              </div>
            </div>
          </div>

          <ul className={`pagination justify-content-end my-4`+ ' ' + paging.pagination}>
            <li className={`page-item`+ ' ' + paging.disabled} ><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><span className="page-link"> .. </span></li>
            <li className="page-item"><a className="page-link" href="#">10</a></li>
            <li className="page-item"><a className="page-link" href="#">11</a></li>
            <li className="page-item"><a className={`page-link`+ ' ' + paging.active} href="#">12</a></li>
            <li className="page-item"><a className="page-link" href="#">16</a></li>
            <li className="page-item"><span className="page-link"> .. </span></li>
            <li className="page-item"><a className="page-link" href="#">26</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>

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
