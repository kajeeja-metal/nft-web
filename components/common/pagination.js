import React from 'react';

import paging from './pagination.module.scss';

const Pagination = () => {
  return (
    <>  
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
    </>
  );
}

export default Pagination;
