import React, { useState, useEffect } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [serchData, setSearchData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      setSearchData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handelnputValue = (value) => {
    setInputValue(value);
    const filterData = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchData(filterData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Search</div>
      <div className="search">
        <div className="search-header">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => handelnputValue(e.target.value)}
          />
        </div>
        <div className="search-list">
          {serchData && serchData.length > 0 ? (
            <ul>
              {serchData.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
