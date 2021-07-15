import React from 'react';
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from "react-redux";
import GetMovies from "../moviesList/GetMovies";
import {setCurrentPage} from "../../redux/actionCreators";

function Pagination () {
    const pageCount = useSelector(({pagination}) => pagination.allPages);
    const currentPage = useSelector(({pagination}) => pagination.currentPage);
    const dispatch = useDispatch();

        function handlePageChange(newPage) {
            let value = newPage.selected+1;
            dispatch(setCurrentPage(value));
            return (<div><GetMovies/></div>)     }

   return (
        <div className='container' style={{display:"flex", justifyContent:"center"}}>
            {handlePageChange}
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
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
export default Pagination
