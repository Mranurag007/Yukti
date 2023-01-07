import React from "react";
import BuisSetup from "./BuisSetup";
import Products from "./Products"
const SetBuis = (e) => {
  return (
    <>
      <a className="buis-card">
        <div className="buis setup">
          {/* <div className="create-icon mx-auto"><img className="buis-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysXR91YjyMbSNXHOH9JNpeGwOwUy1VcOx7A&usqp=CAU"></img></div> */}
          <div className="cr-line">{e.data.buisness_name}</div>
          <button >
            SUBMIT
          </button>
        </div>
      </a>

    </>

  );
};

export default SetBuis;