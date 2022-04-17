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

  React.useEffect(() => {
    async function fetchMatches() {
      setMatches(await api.getMatches());
    }
    fetchMatches();
  }, []);

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

        <MatchesList matches={matches} search={search} />
      </main>
  );
};
export default App;
