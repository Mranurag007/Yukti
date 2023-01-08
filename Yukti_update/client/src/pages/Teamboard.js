import React from "react";
const Teamboard = () => {
    return (
        <>
            <div className="headline">
                <h1>OUR EXECUTIVE TEAM</h1>
            </div>
            <div class="row teamcard">
                <div class="col-sm-6 col-xs-6 itemcard">
                    <div className="item my-auto">
                        <img className="item-1" src="../images/profile.jpeg" />
                    </div>
                    <div className="item my-auto">
                        <div className="name-a">Karuna Randive</div>
                        <div className="role">Frontend Developer</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 itemcard">
                <div className="item my-auto">
                        <img className="item-1" src="../images/profile.jpeg" />
                    </div>
                    <div className="item my-auto">
                        <div className="name-a">Prajakta Chavan</div>
                        <div className="role">Frontend Developer</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 itemcard">
                <div className="item my-auto">
                        <img className="item-1" src="../images/profile.jpeg" />
                    </div>
                    <div className="item my-auto">
                        <div className="name-a">Arya Taiwade</div>
                        <div className="role">Backend Developer</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 itemcard">
                <div className="item my-auto">
                        <img className="item-1" src="../images/profile.jpeg" />
                    </div>
                    <div className="item my-auto">
                        <div className="name-a">Anurag Magdum</div>
                        <div className="role">Backend Developer</div>
                    </div>
                </div>

            </div>
        </>


    );
};

export default Teamboard;