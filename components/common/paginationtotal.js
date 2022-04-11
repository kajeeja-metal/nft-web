import React from 'react';
import form from '../../public/account/Form.module.scss';
import paging from './pagination.module.scss';

const Pagination = () => {
  return (
    <>  
       <div className={paging.totalPaging}>
        <div className={paging.total}>
          <select className={`form-select` + ' ' + form.selectDropArrow}>
            <option>20</option>
            <option>40</option>
            <option>60</option>
            <option>80</option>
          </select>
          <span className={paging.totalLbl}>490 Assets</span>
        </div>
        <ul className={`pagination justify-content-end`+ ' ' + paging.pagination}>
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
        
    </>
  );
}

export default Pagination;
