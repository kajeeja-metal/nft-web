import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';

import button from '../../../public/account/Buttons.module.scss';
import form from '../../../public/account/Form.module.scss';
import Pagination from '../../../components/common/paginationtotal.js';
import classes from '../create/collectionassets.module.scss';

import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAngleRight, faSortAmountDown, faSearch, faArrows, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import User from '../../../public/collections/images/user.png';
import User2 from '../../../public/collections/images/user2.png';
import User3 from '../../../public/collections/images/user3.png';
import User4 from '../../../public/collections/images/user4.png';
import AssetImg from '../../../public/collections/images/assetimg.png';

const StepCollectionAssets = () => {
  const [modalShow, ModalSetShow] = useState(false);

  const handleClose = () => ModalSetShow(false);
  const handleShow = () => ModalSetShow(true);
  return (
    <>  
      <div className={`text-center`+ ' ' + classes.titleWrap}>
        <h1 className={classes.title}>Please select assets to add into your collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* <div className={`` + ' ' + classes.formGroup}>
        <h2>Collection Assets</h2>
        <p>All your NFT (0 Assets)</p>
      </div> */}

      <div className='text-right mb-3' style={{textAlign:"Right"}}>
        <button className={`btn ${button.btnPrimary}`} onClick={handleShow}>
          Add Assert to collection
        </button>
      </div>

      <div className='classes.collectionFilter'>
        <div className='row'>
     
          <div className={`col-md-4`+ ' ' + classes.formGroup + ' ' + classes.search}>
            <div className={classes.searchModal}>
              <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
              <input placeholder='Search... ' className={`w-100` + ' ' + classes.formControl} />
            </div>
          </div>
        
          <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Channel <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Contract <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                    <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                    Sort by date  <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className={`table-responsive` + ' ' + classes.tableWrapper}>
        <table className={`table` + ' '  + classes.table}>
          <thead>
            <tr>
              <th className={classes.assetTh}>Asset</th>
              <th className={classes.chainnTh}>Chain</th>
              <th className={classes.orderTh}>Order</th>
              <th className={classes.deleteTh}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
                  BITKUB
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User2}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
              BIT
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User3}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
              <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User4}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
                  BITKUB
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User2}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
              BIT
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
              <span className={`btn` + ' ' + classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User3}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
                OPENSES
              </td>
              <td>
              <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.prodNameGroup}>
                  <span className={`dragable` + ' ' + classes.dragItem}>
                    <FontAwesomeIcon icon={faArrows} className={classes.faArrows} />
                  </span>
                  <div className={classes.selectUser}>
                    <label className={form.chkWrap}>
                    <input type="checkbox" />
                    <span className={classes.checkSku + ' ' + form.chkmark}>0xceB945...</span>
                    </label>
                  </div>
                  <div className={classes.tdProduct}>
                      <Link href="/"><a className={classes.name}>
                        <Image
                          src={User4}
                          height={55} width={55} alt="User"
                        />
                        <span>Name</span>
                      </a></Link>
                  </div>
                </div>
              </td>
              <td>
              Chain
              </td>
              <td>
                  <select className={`form-select` + ' ' + form.selectDropArrow}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
              </td>
              <td>
                <span className={classes.deleteRow}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <Pagination />

      <div className={ classes.formGroup}>
        <a className={`btn ${button.btnTextDanger}`}><FontAwesomeIcon icon={faTrash} className={classes.faTrash} />  Delete this collection</a>
      </div>

      <Modal show={modalShow} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className={classes.modalLg}>
        <Modal.Header closeButton style={{border:"none",paddingBottom:0}}>
        </Modal.Header>
        <Modal.Body>
          <div className={`text-center`+ ' ' + classes.titleWrap}>
            <h1 className={classes.title}>My assert</h1>
            <p>All assets from your connected Wallet will display here. </p>
          </div>

          <div className='classes.collectionFilter'>
            <div className='row'>
        
              <div className={`col-md-4`+ ' ' + classes.formGroup + ' ' + classes.search}>
                <div className={classes.searchModal}>
                  <button className='btn'><FontAwesomeIcon icon={faSearch} className={classes.faSearch} /></button>
                  <input placeholder='Search... ' className={`w-100` + ' ' + classes.formControl} />
                </div>
              </div>
            
              <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Channel <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Contract <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className={classes.formControl + ' ' + classes.formGroup} variant="primary">
                        <label className={'d-block' + ' ' +classes.modalLabel} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faSortAmountDown} className={classes.faAngleRight} /> &nbsp;
                        Sort by date  <span style={{float:"right"}}><FontAwesomeIcon icon={faAngleRight} className={classes.faAngleRight} /></span>
                        </label>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='row px-3'>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem + ' ' + classes.active}>
                <div className={classes.checkitem}>
                  <input type="checkbox" />
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={classes.assetPopupItem}>
                <div className={classes.checkitem}>
                  <input type="checkbox"/>
                  <span className={classes.checkicon}>                   
                  <FontAwesomeIcon icon={faCheckCircle} className={classes.faCheckCircle} />
                  </span>
                </div>
                <div className={classes.assetPopupItemImg}>
                  <Link href="/"><a>
                    <Image
                      src={AssetImg}
                      height={310} width={330} alt="User"
                    />
                  </a></Link>
                </div>
                <div className={classes.assetPopupItemInfo}>
                  <div className={classes.assetPopupItemInfoInner}>
                    <h3>
                      <Link href="/"><a>
                        NFT Name
                      </a></Link>
                    </h3>
                    <p className={classes.assetItemDesc}>Desctiption Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Ut molestie maecenas...</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <Pagination />
          <div className={classes.assetBtnGroup}>
            <Button className={`btn ${button.btnOutlinePrimary}`} onClick={handleClose}>
              Close
            </Button>
            <Button className={`btn ${button.btnPrimary}`}  onClick={handleClose} type="submit">
              Add Assert
            </Button>
            
          </div>
        </Modal.Body>

      </Modal>
        
    </>

    
  );
}

export default StepCollectionAssets;
