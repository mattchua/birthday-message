import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import ProfileMedium from "./ProfileMedium";
import Employees from "./Employees.json";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [gender, setGender] = useState("");
  const [month, setMonth] = useState("");
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={`react-root`}>
      <NavigationBar />
      <div className="left">
        <span>Welcome Cindy!</span>
        <br></br>

        <span>Enter Birthday messages for your team</span>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            className="searchBar"
            defaultValue={searchInput}
            placeholder="Search by name"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FontAwesomeIcon
            color="black"
            icon={faSearch}
            style={{
              left: "1.3em",
              verticalAlign: "middle",
              marginTop: ".6em",
              position: "absolute",
              pointerEvents: "none",
            }}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {/* Gender selection */}
                <div>
                  <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                    Gender
                  </div>
                  <select onChange={(e) => setGender(e.target.value)}>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </td>
              <td>
                {/* Birth month selection */}
                <div>
                  <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                    Month
                  </div>
                  <select onChange={(e) => setMonth(e.target.value)}>
                    <option value="">All</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="profileSection">
          <ul>
            {Employees.filter(
              (Employee) =>
                (Employee.gender === gender || gender === "") &&
                ((new Date(Employee.birthday).getMonth() + 1).toString() ===
                  month ||
                  month === "") &&
                (Employee.name.toLowerCase().includes(searchInput) || !searchInput)
            ).map((Employee, index) => (
              <ProfileMedium
                key={index}
                id={index}
                name={Employee.name}
                gender={Employee.gender}
                birthday={Employee.birthday}
                src={Employee.src}
              />
            ))}
          </ul>
        </div>
        {/* <h1>Hi Babe!</h1>
        <ColorChangeButton color='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='yellow' setColor={setColor}/> */}
      </div>
    </div>
  );
}

export default App;
