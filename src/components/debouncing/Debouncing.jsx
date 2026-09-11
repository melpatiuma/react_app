import React, { useEffect, useState } from "react";
import useDebouncing from "./useDebouncing";

const Debouncing = () => {
  const [search, setSearch] = useState("");
  const BASE_URL = "https://dummyjson.com/recipes";
  const data = useDebouncing(BASE_URL, search, 500);

  console.log("data", data);
  return (
    <>
      <div>Debouncing</div>
      <div>
        <input
          type="text"
          placeholder="Enter search term..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Debouncing;
