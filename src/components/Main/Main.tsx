import "./Main.css";

interface Item {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MainProps {
  items: Item[];
  query: string;
  totalResults: number;
  isLoading: boolean;
}

const Main = ({ items, query, totalResults, isLoading }: MainProps) => {
  const placeholderItems = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="item placeholder">
      <div className="placeholderImageContainer">
        <img
          className="placeholderImage"
          src="/placeholder-image.png"
          alt="placeholder"
        />
      </div>
      <div className="itemInfo">
        <p className="placeholderText">Title: ...</p>
        <p className="placeholderText">Year: ...</p>
        <p className="placeholderText">Type: ...</p>
        <p className="placeholderText">ID: ...</p>
      </div>
    </div>
  ));

  if (isLoading) {
    return (
      <div className="main">
        <div className="loaderContainer">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      {query && (
        <div className="info">
          <span>You Searched For:</span>
          <span> {query}</span>
          {totalResults && <span className="totalNumber">{totalResults}</span>}
        </div>
      )}
      <div className="itemsWrapper">
        {items.length > 0
          ? items.map((item) => (
              <div key={item.imdbID} className="item">
                <img src={item.Poster} alt={item.Title} />
                <div className="itemInfo">
                  <p>{item.Title}</p>
                  <p>{item.Year}</p>
                  <p>{item.Type}</p>
                  <p>{item.imdbID}</p>
                </div>
              </div>
            ))
          : placeholderItems}
      </div>
    </div>
  );
};

export default Main;
