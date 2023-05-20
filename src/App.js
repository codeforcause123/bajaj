import "./App.css";
import { useState, useEffect } from "react";
import Example from "../src/components/Example";
import SearchBar from "../src/components/SearchBar";
function App() {
  const [data, setData] = useState([]);
  const [byname, setByname] = useState([]);
  const [designation, setDesignation] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
      );
      const json = await response.json();
      if (response.ok) {
        const dataArray = Object.values(json.employees);
        setData(dataArray);
        setByname(dataArray);
        setDesignation(dataArray);
      }
    };
    fetchdata();
  }, []);
  const handleSearch = (query) => {
    if (query === "") {
      setByname(data);
    } else {
      const filteredData = data.filter((item) => {
        if (item.name) {
          return item.name.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
      setByname(filteredData);
    }
  };
  const handleSearch1 = (query) => {
    if (query === "") {
      setDesignation(data);
    } else {
      const filteredData = data.filter((item) => {
        if (item.designation) {
          return item.designation.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
      setDesignation(filteredData);
    }
  };
  useEffect(() => {
    setByname(data);
    setDesignation(data);
  }, []);
  return (
    <div className="container">
      <div>
        <h1 className="text-2xl my-4">Search By Name</h1>
        <SearchBar onSearch={handleSearch} />
        <Example id="content1" data={byname}/>;
      </div>
      <div>
        <h1 className="text-2xl my-4">Search by Designation</h1>
        <SearchBar onSearch={handleSearch1} />
        <Example id="content2" data={designation} />;
      </div>
    </div>
  );
}

export default App;
