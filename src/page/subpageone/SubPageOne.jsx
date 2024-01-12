import { useEffect, useState } from "react";
import "./subpageone.css";
export const SubPageOne = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);
  return (
    <main>
      <h1>Her ser du data for Todos!</h1>

      <div id="data_display_sp1">
        {data.slice(0, 20).map((todos) => (
          <div>
            {todos.id}:{" "}
            {todos.completed
              ? "This task is completed"
              : "This task is not completed"}
          </div>
        ))}
      </div>
    </main>
  );
};
