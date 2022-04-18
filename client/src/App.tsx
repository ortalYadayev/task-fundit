import React from "react";
import "./assets/App.css";
import { createApiClient, Match } from "./api";
import MatchesList from "./components/MatchesList";

export type AppState = {
  matches?: Match[];
  search: string;
};

const api = createApiClient();
const App = () => {
  const [search, setSearch] = React.useState<string>("");
  const [matches, setMatches] = React.useState<Match[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  React.useEffect(() => {
    fetchMatches(currentPage);
  }, []);

  async function fetchMatches(page: number) {
    const response = await api.getMatches(page)

    setMatches(response.data);
    setTotalPage(Math.ceil(response.length / 5));
  }

  // @ts-ignore
  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage);
    fetchMatches(selectedPage);
  }

  let searchDebounce: any;

  const onSearch = (val: string, newPage?: number) => {
    clearTimeout(searchDebounce);

    searchDebounce = setTimeout(async () => {
      setSearch(val);
    }, 300);
  };

  return (
      <main>
        <h1>Matches List</h1>

        <header>
          <input
              type="search"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
          />
        </header>

        <MatchesList matches={matches} search={search} handlePageClick={handlePageClick} totalPage={totalPage} />
      </main>
  );
};
export default App;
