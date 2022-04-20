import React from "react";

export default function Editor(props){
    return(
        <div className={props.darkMode ? "card dark" : "card"}>
            <div className="card-header">
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> Editor</button>
                    <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Preview</button>
                </div>
            </div>

            <div className="card-body ">
                <textarea
                    className="form-control h-100"
                    placeholder="Notes"
                />
            </div>
        </div>
    )
}