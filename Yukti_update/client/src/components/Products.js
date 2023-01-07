
import AddProduct from "./AddProduct";
import MyProduct from "./MyProduct";
import React, { useState, useContext, useEffect } from "react";
import { matchRoutes, NavLink, useNavigate, useParams } from "react-router-dom";
const Products = () => {
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