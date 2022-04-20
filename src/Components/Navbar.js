import React from "react";

export default function Navbar(props){
    return(
        <nav
            className={props.darkMode ?
                "dark navbar custom-nav container-fluid pt-4 pb-3 px-4 custom-nav-container shadow-lg"
                :
                "navbar custom-nav container-fluid pt-4 pb-3 px-4 custom-nav-container shadow-lg"}
        >
            <h3 className="custom-nav-title">Personal Notes</h3>
            <div className="toggler d-flex justify-content-center float-end pt-2">
                <p className="toggler-light">Light</p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}

