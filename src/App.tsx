import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Pagination from "./components/Pagination/Pagination";

interface Response {
  Search: Item[];
  totalResults: number;
  Response: "True" | "False";
}

interface Item {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function App() {
  // const [count, setCount] = useState(0)

  const [response, setResponse] = useState({} as Response);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=4a249f8d&s=${query}&page=${currentPage}`
      );
      const data = await response.json();
      setResponse(data);
      setIsLoading(false);
    };

    fetchData();
  }, [query, currentPage]);

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="wrapper">
      <Header onQueryChange={onQueryChange} />
      <Main
        items={response?.Search || []}
        query={query}
        totalResults={response.totalResults}
        isLoading={isLoading}
      />
      {response.Search && (
        <Pagination
          currentPage={currentPage}
          totalPages={
            response.totalResults ? Math.ceil(response.totalResults / 10) : 0
          }
          onPageChange={(page) => {
            console.log(page);
            setCurrentPage(page);
          }}
        />
      )}
    </div>
  );
}

export default App;
