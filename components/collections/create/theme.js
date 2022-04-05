import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"
import nav from '../../../public/collections/tabnav.module.scss';
import paging from '../../../public/collections/pagination.module.scss';
import classes from '../../../components/collections/create/theme.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Theme1 from '../../../public/collections/create/theme1.png';
import Theme2 from '../../../public/collections/create/theme2.png';
import Theme3 from '../../../public/collections/create/theme3.png';


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
      <div className={classes.titleWrap}>
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
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name (Default)</a></Link>
                  </h3>
                  <div className={classes.btnGroup}>
                    <button className={`btn btn-default `+ classes.btn}>
                      <FontAwesomeIcon icon={faEye} className={classes.faeye} />
                      Preview
                    </button>
                    <button className={`btn btn-default `+ classes.btn}>
                      <input type="radio" name="themeselect" checked />
                      Current Template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme2}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name</a></Link>
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
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
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
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme3}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
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
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme1}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name</a></Link>
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
            </div>

            <div className='col-6 col-md-4'>
              <div className={classes.thumblist}>
                <div className={classes.thumbImg}>
                  <Link className={classes.thumbsItem} href="/">
                    <a><Image
                      src={Theme3}
                      height={376}
                      width={376}
                      alt="Thumbs"
                      />
                    </a>							
                  </Link>
                </div>
                <div className={classes.thumbInfo}>                 
                  <h3 className={classes.thumbTitle}>
                    <Link href="/"><a>Template Name </a></Link>
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

          <div className='text-right'>
            <div className='btns-group mb-3' style={{ "textAlign":"right"}}>
                <button className='btn btn-default mr-2'>Cancel</button>
                <button className='btn btn-primary'>Save</button>
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
