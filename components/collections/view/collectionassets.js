import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import style from '../../../public/collections/index.module.scss';
import Pagination from '../../../components/common/paginationtotal.js';
import classes from '../view/collectionassets.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSortAmountDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import User from '../../../public/collections/images/user.png';
import User2 from '../../../public/collections/images/user2.png';
import User3 from '../../../public/collections/images/user3.png';
import User4 from '../../../public/collections/images/user4.png';


const StepCollectionAssets = () => {

  return (
    <>  
      <div className={`text-center`+ ' ' + style.titleWrap}>
        <h1 className={style.title}>Please select assets to add into your collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className='classes.collectionFilter'>
        <div className='row'>
     
          <div className={`col-md-4`+ ' ' + style.formGroup + ' ' + classes.search}>
            <div className={classes.searchModal}>
              <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
              <input placeholder='Search... ' className={`w-100` + ' ' + style.formControl} />
            </div>
          </div>
        
          <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className={style.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Channel <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={style.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Contract <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={style.formControl} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Sort by date  <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className={classes.tableWrapper}>
        <table className={`table` + ' '  + classes.table}>
          <thead>
            <tr>
              <th></th>
              <th className={classes.assetTh}>Asset</th>
              <th className={classes.chainnTh}>Chain</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>               
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                  BITKUB
              </td>
              <td>             
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <div className={classes.tdProduct}>
                  <Link href="/"><a className={classes.name}>
                      <Image
                        src={User2}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              BIT
              </td>

              <td>
      
              </td>
            </tr>
            <tr>
              <td>

              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User3}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
             
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <div className={classes.tdProduct}>
                <Link href="/"><a className={classes.name}>
                      <Image
                        src={User4}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                
              </td>
            </tr>

            <tr>
              <td>
               
              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                  BITKUB
              </td>

              <td>             
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <div className={classes.tdProduct}>
                  <Link href="/"><a className={classes.name}>
                      <Image
                        src={User2}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              BIT
              </td>

              <td>
      
              </td>
            </tr>
            <tr>
              <td>

              </td>
              <td>
                <div className={classes.tdProduct}>
                    <Link href="/"><a className={classes.name}>
                      <Image
                        src={User3}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
             
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <div className={classes.tdProduct}>
                <Link href="/"><a className={classes.name}>
                      <Image
                        src={User4}
                        height={55} width={55} alt="User"
                      />
                      <span>Name</span>
                    </a></Link>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination />
        
    </>
    
  );
}

export default StepCollectionAssets;
