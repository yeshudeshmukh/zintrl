import React from "react";

const Filterbtn =(props)=>{
    return(
        <div className="filterbtn">
            {
                props.btn.map((Element)=>{
                    return(
                        <button>{Element}</button>
                    )
                })
            }
        </div>
    )
}
export default Filterbtn;