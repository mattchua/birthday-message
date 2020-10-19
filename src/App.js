import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import ProfileMedium from "./ProfileMedium";
import Employees from "./Employees.json";

function App() {
  const [gender, setGender] = useState("All");
  return (
    <div className={`react-root`}>
      <NavigationBar />
      <div className="left">
        <span>Welcome Cindy!</span>
        <br></br>
        <span>Enter Birthday messages for your team</span>
        <div>
          <select onClick={(e) => setGender(e.target.value)}>
            <option value="All"></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="profileSection">
          {Employees.filter((Employee) => Employee.gender === gender || gender === "All").map(
            (Employee) => (
              <ProfileMedium
                name={Employee.name}
                gender={Employee.gender}
                birthday={Employee.birthday}
                src={Employee.src}
              />
            )
          )}
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
