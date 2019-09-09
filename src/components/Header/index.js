import React from "react";
import "./style.css"

const Header = (props) => {
     return (
     <div className = "header clearfix">
        <div className = "title"><h1>{props.children}</h1></div>
        <div className="scores">
         <h3> Score: {props.score} Highscore: {props.highscore}</h3>
        </div>
    </div>

     )
}

export default Header;


