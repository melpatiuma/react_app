import { useEffect, useState } from "react";

const useDebouncing = (url, value, delay = 500) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const resData = await res.json();
      const finalData = resData.recipes.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );
      setData(finalData);
    } catch (err) {
      console.log(err || "Error fetching data");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, url, delay]);

  return data;
};

export default useDebouncing;
