import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NewSetup from "./NewSetup";
import SetBuis from "./SetBuis";
import { Usercontext } from "../App";
const BuisSetup = () => {
  const { state, dispatch } = useContext(Usercontext);
  const [userData, setUserData] = useState({});
  const history = useNavigate();
  const callAboutpage = async (e) => {
    try {
      const res = await fetch('/buisnessdata', {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include",

      });
      const data = await res.json();
      setUserData(data);
      dispatch({ type: "USER", payload: true })
      if (!res.status === 200) {
        throw new Error(res.err);
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    callAboutpage();
  }, []);
  return (
    <>
      <div className="profile-template">
        <div className="pro-line">My Buisness</div>
        <div className="buis-board">
          <div className="col board-page">
            {
              Object.values(userData).map((val, ind) => {
                return <SetBuis key={ind} data={val} />
              })
            }
            <a className="buis-card" href="/setbuisness"><NewSetup /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuisSetup;