import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AboutData from "./Data";
import AboutCard from "./AboutCard";
import Showbuis from "./showbuis";
const About = () => {
    const [userData, setUserData] = useState({});
    const callAboutpage = async (e) => {
        try {
            const res = await fetch('/allbuisnessdata', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",

            });
            const data = await res.json();
            setUserData(data);
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
                <div class="heading mt-2"> <span>High-impact Marketing <br />Services</span> </div>
                <div className="buis-board">
                    <div className="col board-page">
                        {
                            Object.values(userData).map((val, ind) => {
                                return <Showbuis key={ind} data={val} />
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;