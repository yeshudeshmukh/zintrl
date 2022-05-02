import React from "react";
const Navbarbtn=(props)=>{
    return(
        <div className="">
            <button className="navbtn">
            <i className={`flex-item ${props.icon}` }></i>
            <span className="flex-item"> {props.title}</span>
            </button>
            
        </div>
    )
}
const RightNavbar=()=>{
    return(
        <>
            <Navbarbtn icon="fas fa-fire-flame-curved" title="Hot Scoops"/>
            <Navbarbtn icon="fas fa-sack-dollar" title="Earnings"/>
            <Navbarbtn icon="fas fa-award " title="Awards"/>
            <Navbarbtn icon="fas fa-arrow-trend-up" title="Expansion"/>
            <Navbarbtn icon="fas fa-person-circle-plus " title="Open Positions"/>
            <Navbarbtn icon="fas fa-people-carry-box"title="New Hire"/>
           <hr />
            <Navbarbtn icon="fas fa-chart-line " title="Analytics & Reporting"/>
            <Navbarbtn icon="fas fa-piggy-bank" title="Budgeting & Planning"/>
            <Navbarbtn icon="fas fa-satellite-dish" title="Communications"/>
            <Navbarbtn icon="fas fa-laptop" title="Technology"/>
            <Navbarbtn icon="fas fa-scale-balanced" title="Legal"/>
            <Navbarbtn icon="fas fa-building" title="Infrastructure"/>
            <Navbarbtn icon="fas fa-bullhorn " title="Marketing"/>

        </>
    )
}
export default RightNavbar;