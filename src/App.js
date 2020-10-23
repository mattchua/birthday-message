import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import ProfileMedium from "./ProfileMedium";
import Employees from "./Employees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [gender, setGender] = useState("");
  const [month, setMonth] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div className={`react-root`}>
      <NavigationBar />
      <div className="left">
        <span>Welcome Cindy!</span>
        <br></br>

        <span>Enter Birthday messages for your team</span>
        {/* Search bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 10% auto 10%",
            gridTemplateRows: "50% auto",
          }}
        >
          <div className="filter1">
            <div>
              <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                Gender
              </div>
              <select className="genderSelection" onChange={(e) => setGender(e.target.value)}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="filter2">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>Month</div>
            <select className="monthSelection" onChange={(e) => setMonth(e.target.value)}>
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
          <div className="sort1">
            <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>
              Sort By:
            </div>
            <select className="sortSelection" onChange={(e) => setSort(e.target.value)}>
              <option></option>
              <option value="name asc">Name Ascending</option>
              <option value="name desc">Name Descending</option>
              <option value="birthday asc">Birthday Ascending</option>
              <option value="birthday desc">Birthday Descending</option>
            </select>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            boxShadow: "0px 0px 10px lightgrey",
            borderRadius: "1em",
          }}
        >
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
              marginTop: ".5em",
              position: "absolute",
              pointerEvents: "none",
            }}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td colSpan="1">{/* Gender selection */}</td>
              <td colSpan="1">
                {/* Birth month selection */}
                <div></div>
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
                (Employee.name.toLowerCase().includes(searchInput) ||
                  !searchInput)
            )
              .sort(function (a, b) {
                if (sort === "name asc") return a.name.localeCompare(b.name);
                else if (sort === "name desc")
                  return b.name.localeCompare(a.name);
                else if (sort === "birthday asc")
                  return new Date(a.birthday) - new Date(b.birthday);
                else if (sort === "birthday desc")
                  return new Date(b.birthday) - new Date(a.birthday);
                return 0;
              })
              .map((Employee, index) => (
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
