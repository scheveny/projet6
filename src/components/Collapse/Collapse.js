import React, { useState, useRef } from "react";
import arrowImg from "../../assets/collapse-arrow.png";
import "./Collapse.scss";

const Collapse = (props) => {
    // State variables using the useState hook.
    const [open, setOpen] = useState(false); // Represents the state of whether the collapse is open or closed.
    const [rotate, setRotate] = useState("0deg"); // Represents the rotation of the arrow icon.

    // useRef to get a reference to the arrow div for manipulation.
    const arrow = useRef();

    // Function to toggle the open state and rotate the arrow when the button is clicked.
    const toggleArrow = () => {
        setOpen(!open); // Toggles the open state.
        if (!open) {
            setRotate("180deg"); // Rotates the arrow 180 degrees if opening.
        } else {
            setRotate("0deg"); // Rotates the arrow back to 0 degrees if closing.
        }
    };

    // This allows the Collapse component to dynamically display a list of equipment items when props.list is provided.
    let equipmentList ;
    if (props.list) {
        equipmentList = props.list.map((data, index) => (
            <li key={index}>{data}</li>
        ));
    }

    // Rendering the component.
    return (
        <div className="collapseContainer">
            <button className="collapse-btn" onClick={toggleArrow}>
                {props.label}
                <div style={{ rotate }} ref={arrow} className="arrow">
                    <img src={arrowImg} alt="bouton flèche" />
                </div>
            </button>
            {/* Content that is shown or hidden based on the 'open' state */}
            <div className={open ? "children-show" : "children-hidden"}>
                <div className="children-content">
                    <p>{props.content}</p>
                    <ul>{equipmentList}</ul>
                </div>
            </div>
        </div>
    );
};


export default Collapse;