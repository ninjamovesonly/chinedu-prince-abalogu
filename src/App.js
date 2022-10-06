import { useEffect, useState } from "react";
import "./App.css";

const DATA = [
  {
    name: "Chinedu Prince Abalogu",
    title: "Full stack software engineer",
  },
  {
    name: "John Doe",
    title: "Data Analyst",
  },
  {
    name: "Joshua Lundar",
    title: "Head of Engineering",
  },
  {
    name: "Prince Bruew",
    title: "Head of Technology",
  },
  {
    name: "Isaac Einten",
    title: "Integrations Lead",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    if (searchValue) {
      const filtered = DATA.filter(({ name, title }) => {
        return (
          name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
          title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(DATA);
    }
  }, [searchValue]);

  return (
    <div className="App">
      <input
        className="App-input"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {filteredData.map((data, idx) => {
        return (
          <div className="App-card">
            <p className="App-card-name">{data.name}</p>
            <p className="App-card-title">{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
