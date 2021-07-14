import React from "react";

const Button = ({ButtonName, ButtonLink}) => {
    return(
        <a href={ButtonLink}>
            <button className="button" style={{backgroundColor: "lightGrey", color: "navy"}}> {ButtonName} </button>
        </a>
    )
}

export default Button;