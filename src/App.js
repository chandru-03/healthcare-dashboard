import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import style from "./styles/App.module.css";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  return (
    <div>
      <Header />
      <section className={style.FlexContainer}>

        <div className={style.Sidebar}>
          <Sidebar />
        </div>

        <div className={style.Dashboard}>
          <DashboardMainContent />
        </div>

        {/* <div className={style.Appointment}>

        </div> */}
        
      </section>
    </div>
  );
}

export default App;
