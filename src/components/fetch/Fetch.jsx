import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    try {
      const responce = await fetch(URL);
      const data = await responce.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>Fetch Data</div>
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Fetch;
