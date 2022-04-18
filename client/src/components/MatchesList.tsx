import React from "react";
import { Matches } from "./Matches";
import { Match } from "../api";
import ReactPaginate from "react-paginate";

const MatchesList = ({
    matches,
    search,
    totalPage,
    handlePageClick,
}: {
    matches: Match[];
    search: string;
    totalPage: number;
    handlePageClick: any
}) => {
    const pageCount = 5;
    return (
        <div>
            {
                matches ? (
                <div className="results">Showing {matches.length} results</div>
                ) : null
            }
            {
                matches ? (
                <Matches matches={matches} search={search} />
                ) : (
                <h2>Loading...</h2>
            )}

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={totalPage}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link-disabled"}
                activeClassName={"pagination__link-active"}
                pageLinkClassName={"pagination__link-page"}
            />
        </div>
    )
}

export default MatchesList;