import React from "react";
import styles from "./SearchBar.module.css";


const SearchBar = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.input}
      />      
    </div>
  );
};

export default SearchBar;
