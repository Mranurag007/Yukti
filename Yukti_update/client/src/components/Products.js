
import AddProduct from "./AddProduct";
import MyProduct from "./MyProduct";
import React, { useState, useContext, useEffect } from "react";
import { matchRoutes, NavLink, useNavigate, useParams } from "react-router-dom";
import { Usercontext } from "../App";
const Products = () => {
  const { state, dispatch } = useContext(Usercontext);
  const p = useParams();
  const [userData, setUserData] = useState({});
  const history = useNavigate();
  const callAboutpage = async (e) => {
    try {
      const res = await fetch(`/allproducatdata/${p.pid}`, {
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
      {
              Object.values(userData).map((val, ind) => {
                return <MyProduct key={ind} data={val} />
              })
            }
            <a className="buis-card" href={`addproduct/${p.pid}`}><AddProduct /></a>
    </>

  );
};

export default Products;