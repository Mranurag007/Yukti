import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SetForm = () => {
    const [userData, setUserData] = useState({});
    const [buisness_name, setbuisness_name] = useState(null);
    const [ceo_name, setceo_name] = useState(null);
    const [category, setcategory] = useState(null);
    const [location, setlocation] = useState(null);
    const [revenue, setrevenue] = useState(null);
    const [strength, setstrength] = useState(null);
    const [year, setyear] = useState(null);
    const [Description, setDescription] = useState(null);
    const history = useNavigate();
    const callAboutpage = async (e) => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",

            });
            const data = await res.json();
            setUserData(data);
            console.log(data);
            if (!res.status === 200) {
                throw new Error(res.err);
            }
        }
        catch (err) {
            console.log(err);
            history("/login");
        }
    }
    const savadata = async function (e) {
        e.preventDefault();
        const user_id = userData.user_id;
        const res1 = await fetch("/businessdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id, buisness_name, ceo_name, category, location, revenue, strength, year, Description
            })
        });
        history("/dashboard");
    }
    useEffect(() => {
        callAboutpage();
    }, []);
    return (
        <>
            <div class="box mx-auto">
                <div className="box-b">
                    <h3 class="text">Tell us about your business</h3>
                    <form class="container-a">
                        {/* Business Name */}
                        <label for="inputuser" class="form-label">Business Name</label>
                        <input type="text" class="form-control" id="inputuser" value={buisness_name} onChange={(e) => setbuisness_name(e.target.value)} />
                        <br />

                        {/*  Company CEO */}
                        <label for="inputuser" class="form-label">Business Head Name</label>
                        <input type="text" class="form-control" id="inputuser" value={category} onChange={(e) => setcategory(e.target.value)} />
                        <br />


                        {/* Category */}
                        <label for="Sell" class="form-label">Category</label><br />
                        <select name="sell" id="sell" class="box-a" value={ceo_name} onChange={(e) => setceo_name(e.target.value)}>
                            <option value="Select">--Select--</option>
                            <option value="o1">Health & Beauty</option>
                            <option value="o2">FFashion - Clothing, Handicraft &amp; Jewellery</option>
                            <option value="o3">Electronics</option>
                            <option value="o4">Food, Groceries & Beverages</option>
                            <option value="o5">Home & Living - Furniture, Paintings</option>
                            <option value="o6">Industrial supplies</option>
                            <option value="o6">Building materials</option>
                            <option value="o6">Office supplies</option>
                            <option value="o6">Others</option>
                            <option value="o6">I'm not sure yet.</option>
                        </select>
                        <br />
                        <br />


                        {/*Location */}
                        <label for="inputlocation" class="form-label">Location</label>
                        <input type="text" class="form-control" id="inputlocation" value={location} onChange={(e) => setlocation(e.target.value)} />
                        <br />

                        {/*revenue */}
                        <label for="revenue" class="form-label">Revenue</label><br />
                        <select name="revenue" id="revenue" class="box-a" value={revenue} onChange={(e) => setrevenue(e.target.value)}>
                            <option value="Select">--Select--</option>
                            <option value="less than 50000">less than 50000</option>
                            <option value="50000-100000">50000-100000</option>
                            <option value="100000-200000">100000-200000</option>
                            <option value="200000-500000">200000-500000</option>
                            <option value="more than 500000">more than 500000</option>
                        </select>
                        <br />
                        <br />

                        Additional information below.

                        {/*revenue */}
                        <label for="strength" class="form-label">Strength</label><br />
                        <select name="strength" id="strength" class="box-a" value={strength} onChange={(e) => setstrength(e.target.value)}>
                            <option >--Select--</option>
                            <option value="less than 10">less than 10</option>
                            <option value="10-50">10-50</option>
                            <option value="50-100">50-100</option>
                            <option value="100-1000">100-1000</option>
                            <option value="more than 1000">more than 1000</option>
                        </select>
                        <br />
                        <br />



                        {/*Location */}
                        <label for="inputyear" class="form-label">Year of Establishment</label>
                        <input type="text" class="form-control" id="inputyear" value={year} onChange={(e) => setyear(e.target.value)} />
                        <br />

                        {/*Description */}
                        <label for="inputDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="Descriptionocation" value={Description} onChange={(e) => setDescription(e.target.value)} />
                        <br />

                        <button type="submit" class="frm-btn skip">Skip</button>
                        <button type="submit" class="frm-btn sbmt" onClick={savadata}>Submit</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default SetForm;