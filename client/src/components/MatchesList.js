import React from "react";
import { Matches } from "./Matches";

const MatchesList = ({matches, search}) => {
    return (
        <div>
            {matches ? (
                <div className="results">Showing {matches.length} results</div>
            ) : null}
            {matches ? (
                <Matches matches={matches} search={search} />
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}

export default MatchesList;