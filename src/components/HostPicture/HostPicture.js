import React from "react";
import "./HostPicture.scss";

function HostName(props) {
    return (
        <div className="hosterImg">
            <img src={props.src} alt="" />
        </div>
    );
}

export default HostName;