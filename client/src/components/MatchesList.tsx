import React from "react";
import { Matches } from "./Matches";
import ReactPaginate from "react-paginate";
import { createApiClient, Match } from "../api";

const api = createApiClient();
const PAGE_SIZE = 5;

const MatchesList = ({
    search,
}: {
    search: string,
}) => {
    const [matches, setMatches] = React.useState<Match[] | null>(null);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [totalPage, setTotalPage] = React.useState<number>(0);
    const [approvedCount, setApprovedCount] = React.useState<number>(0);
    const [declinedCount, setDeclinedCount] = React.useState<number>(0);

    React.useEffect(() => {
        fetchMatches(currentPage);
    },[]);

    async function fetchMatches(page: number | undefined = currentPage) {
        const response = await api.getMatches(page)

        setMatches(response.data);
        setTotalPage(Math.ceil(response.length / PAGE_SIZE));

        if(response.approvedCount) {
            setApprovedCount(response.approvedCount);
        }

        if(response.declinedCount) {
            setDeclinedCount(response.declinedCount);
        }
    }

    // @ts-ignore
    function handlePageClick({selected: selectedPage}) {
        setCurrentPage(selectedPage);
        fetchMatches(selectedPage);
    }

    async function approveMatch(event: any) {
        const id = event.target.name;
        api.approveMatch(id);

        fetchMatches();
        setApprovedCount(approvedCount + 1);
    }

    async function declineMatch(event: any) {
        const id = event.target.name;
        api.declineMatch(id);

        fetchMatches();
        setDeclinedCount(declinedCount + 1);
    }

    return (
        <div>
            {
                matches ? (
                <div className="results">
                    <div>
                        Showing { matches.length } results
                    </div>
                    <div>
                        Approved { approvedCount } | Declined { declinedCount }
                    </div>
                </div>
                ) : null
            }
            {
                matches ? (
                <Matches matches={matches} search={search} approveMatch={approveMatch} declineMatch={declineMatch} />
                ) : (
                <h2>
                    No Results!
                </h2>
            )}

            {}

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