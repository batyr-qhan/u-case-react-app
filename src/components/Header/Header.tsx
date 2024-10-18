import { useEffect, useState } from "react";
import "./Header.css";

interface HeaderProps {
  onQueryChange: (newQuery: string) => void;
}

const Header = ({ onQueryChange }: HeaderProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onQueryChange(query);
      // console.log('query changed')
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onQueryChange]);

  return (
    <div className="header">
      <img src="/u-case-react-app/logo.svg" alt="logo" />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className="searchInput"
        />
      </div>

      <div className="profileName">
        <img src="/u-case-react-app/User.svg" alt="search" />
        <span>Your Name</span>
      </div>
    </div>
  );
};

export default Header;
