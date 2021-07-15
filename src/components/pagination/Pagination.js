import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

import {useSelector} from "react-redux";

import GetMovies from "../moviesList/GetMovies";

export default function Pagination() {
   //  const dispatch = useDispatch
    const pageCount = useSelector(({pagination}) => pagination.allPages);
    const currentPage = useSelector(({pagination}) => pagination.currentPage);
    const newPage = currentPage+1;
   //
   //
   //
   //  const [movies, setMovies] = useState([]);
   //  const [loading, setLoading] = useState(true);
   //  const [currentPage, setCurrentPage] = useState(0);
   //  const [pageCount, setPageCount] = useState(0);
   //  let pageNumber = 1;
   // // ( current_Page >= 1 ? pageNumber = current_Page : pageNumber);
   //
   //
   //
   //  function handlePageChange(data) {
   //      setCurrentPage(data.selected);
   //  }


    return (
        <div className='container'>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={<GetMovies newPage={newPage}/>}
                containerClassName={'pagination'}
                previousLinkClassName={'page-link'}
                activeClassName={'page-item active'}
                disabledClassName={'page-item disabled'}
                activeLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
            />
        </div>
    )}