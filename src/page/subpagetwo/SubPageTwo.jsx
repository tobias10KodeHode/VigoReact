import { useEffect, useState } from "react";
import "./subpagetwo.css";
export const SubPageTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);
  return (
    <body>
      <h1>Dataen du ser her er liste med brukere.</h1>
      <div id="data_display_sp2">
        {data.map((user) => (
          <div>
            {user.name} : {user.username}
          </div>
        ))}
      </div>
    </body>
  );
};
