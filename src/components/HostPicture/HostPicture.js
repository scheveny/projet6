import React from "react";
import "./HostPicture.scss";

function HostPicture(props) {
    return (
        <div className="hosterImg">
            <img src={props.src} alt="hôte" />
        </div>
    );
}

export default HostPicture;