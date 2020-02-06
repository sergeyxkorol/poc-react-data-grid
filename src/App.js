import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";

function App() {
  const [rows, setRows] = useState([]);
  const [errors, setErrors] = useState(false);

  function fetchData() {
    fetch("./data.json")
      .then(res => res.json())
      .then(res => setRows(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      key: "id",
      name: "ID",
      frozen: true,
      width: 40,
      sortDescendingFirst: true
    },
    {
      key: "first_name",
      name: "First name",
      resizable: true
    },
    {
      key: "last_name",
      name: "Last name",
      resizable: true
    },
    { key: "email", name: "Email", resizable: true },
    { key: "phone", name: "Phone", resizable: true },
    { key: "city", name: "City", resizable: true },
    { key: "country", name: "Country", resizable: true },
    {
      key: "country_code",
      name: "Country code",
      resizable: true
    }
  ];

  return (
    <div className="App">
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default App;
