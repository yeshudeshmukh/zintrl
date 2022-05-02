import React from "react";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-item container">
                <div className="logo">
                    <img src="/image/logo.png" alt="logo not found" />
                </div>
                <div >
                    <ul className="menu-list text-light">
                        <li>Feed</li>
                        <li>Dashboard</li>
                        <li>Lookup</li>
                        <li>List</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className="user">
                    <div className="searchbtn flex-item">
                        <input type="search" name="" id="" placeholder="Search..." />
                        <button><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="credits flex-item">
                        <i className="fas fa-coins"></i>
                        <span>Creadits</span>
                        <div className="bar">
                            <div className="progess">
                            </div>
                        </div>
                    </div>
                    <div className="flex-item userinfo" >
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <span>Bansilal Brata</span>
                        <img src="/image/user.png" alt="user not found" width={35} height={35} />
                    </div>
                    <div className=" flex-item">
                        <button className="upgrade">Upgrade</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar