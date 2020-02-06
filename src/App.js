import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";

function App() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [errors, setErrors] = useState(false);

  function fetchData() {
    fetch("./data.json")
      .then(res => res.json())
      .then(res => {
        setRows(res);
      })
      .then(() => {
        const columns = [
          { key: "id", name: "ID", frozen: true, width: 50 },
          { key: "first_name", name: "First name" },
          { key: "last_name", name: "Last name" },
          { key: "email", name: "Email" },
          { key: "phone", name: "Phone" },
          { key: "city", name: "City" },
          { key: "country", name: "Country" },
          { key: "country_code", name: "Country code" }
        ];

        setColumns(columns);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default App;
