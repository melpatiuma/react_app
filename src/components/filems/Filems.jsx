import React, { useEffect, useState } from "react";

const Filems = () => {
  const [data, setData] = useState([]);
  const baseURL = "https://swapi.dev/api/people";
  const fetchData = async () => {
    const data = await fetch(baseURL);
    const res = await data.json();

    let resFinal = [];
    for (let i = 0; i < res.results.length; i++) {
      let row = res.results[i];
      let filemsName = [];

      for (let j = 0; j < row.films.length; j++) {
        const fData = await fetch(row.films[j]);
        const fres = await fData.json();
        filemsName.push(fres.title);
      }
      resFinal.push({ ...row, filemsName });
    }
    setData(resFinal);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Films</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, inx) => {
                return (
                  <tr key={item.name || inx}>
                    <td>{inx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.filemsName?.join(", ") || "No films"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Filems;
