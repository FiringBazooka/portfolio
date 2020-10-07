import React from "react";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column very relaxed grid">
        <div className="column sticky-top" style={{ width: "20%" }}>
          <Sidebar />
        </div>

        <div className="ui vertical divider" style={{ left: "20%" }}></div>
        <div className="column" style={{ width: "80%" }}>
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default App;
