import React from "react";
import { Match } from "../api";
import { creditScoreFilter } from "../utils/credit_score";
import {filterByLabel} from "../utils/filter_by_label";

export const Matches = ({
  matches,
  search,
}: {
  matches: Match[];
  search: string;
}) => {

  let filteredMatches: Match[];

  if(filterByLabel(search)) {
    filteredMatches = matches.filter((match) =>
        match.labels?.find((label) => label.toUpperCase() === search.toUpperCase())
    );
  } else {
    filteredMatches = matches.filter((match) =>
        (
            match.borrower.user.firstName.toLowerCase() +
            match.borrower.user.lastName.toLowerCase() +
            match.borrower.user.email.toLowerCase() +
            match.companyName.toLowerCase()
        ).includes(search.toLowerCase())
    );
  }

  return (
    <ul className="matches">
      {filteredMatches.map((match) => (
        <li key={match.id} className={ `credit-score-${creditScoreFilter(match.borrower.creditScore)} match` }>
          <h5 className="title">{match.companyName}</h5>
          <div className="matchData">
            <div>
              <p className="userDate">
                <b>Full Name:</b> {match.borrower.user.firstName}{" "}
                {match.borrower.user.lastName}
              </p>
              <p className="userDate">
                <b>Email:</b> {match.borrower.user.email}
              </p>
              <p className="userDate">
                <b>Credit Score:</b> {match.borrower.creditScore}
              </p>
              <p className="userDate">
                <b>Amount Request: </b> {match.amountReq}
              </p>
              <p className="userDate">
                <b>Balance: </b> {match.borrower.financeData.balance}{" "}
                {match.borrower.financeData.currency}
              </p>
            </div>
          </div>
          <footer>
            <div className="meta-data">
              Created At {new Date(match.creationTime).toLocaleString()}
            </div>
          </footer>
        </li>
      ))}
    </ul>
  );
};
