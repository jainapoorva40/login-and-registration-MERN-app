import React from "react";
import "./homepage.css"

const Homepage=({setLoginUser})=>{
    return(
        <div className="homepage">
        <h1>Hello homepagee</h1>
        <div className="button" onClick={()=>setLoginUser({})}>Logouttt</div>
        </div>
    )
}
export default Homepage