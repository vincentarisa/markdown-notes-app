import React, {useState} from "react";

export default function Notes(props){
    const [passwordData, setPasswordData] = useState({
        password : ""
    })

    function handlePassword(event){
        const {name, value} = event.target
        setPasswordData(prevPasswordData => ({
            ...prevPasswordData,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    //Not complete
    function handleClick(){
        if (props.passwordProtect){
            return(
                <div className="modal fade" id="passwordModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="ModalLabel">Enter Password</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="input-group mb-3 pt-3 px-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">
                                            Password
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="password"
                                            value={passwordData.password}
                                            onChange={handlePassword}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    //Not complete
    return(
        <ul className="list-group list-group-flush">
            <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.noteTitle}</h5>
                    <small className="text-muted">{props.creationDate}</small>
                </div>
                <p className="mb-1">{props.description}</p>
                <small>
                    <div className="btn-group btn-group-sm">
                        <div className="btn-group btn-group-sm">
                            <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-outline-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-download"/>
                                Download
                            </button>
                            <ul className="dropdown-menu border-dark" aria-labelledby="btnGroupDrop1">
                                <li
                                    className="dropdown-item custom-dropdown-item border-1 border-dark border-bottom"
                                    data-bs-toggle={props.passwordProtect ? "modal" : ""}
                                    data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                                    onClick = {handleClick}
                                >
                                    <i className="bi bi-file-pdf"/>
                                    pdf
                                </li>

                                <li
                                    className="dropdown-item custom-dropdown-item border-1 border-dark border-bottom"
                                    data-bs-toggle={props.passwordProtect ? "modal" : ""}
                                    data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                                    onClick = {handleClick}
                                >
                                    <i className="bi bi-markdown"/>
                                    markdown
                                </li>

                                <li
                                    className="dropdown-item custom-dropdown-item"
                                    data-bs-toggle={props.passwordProtect ? "modal" : ""}
                                    data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                                    onClick = {handleClick}
                                >
                                    <i className="bi bi-filetype-html"/>
                                    html
                                </li>
                            </ul>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle={props.passwordProtect ? "modal" : ""}
                            data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                            onClick = {handleClick}
                        >
                            <i className="bi bi-eyeglasses"/>
                            View
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle={props.passwordProtect ? "modal" : ""}
                            data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                            onClick = {handleClick}
                        >
                            <i className="bi bi-pencil-square"/>
                            Edit
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle={props.passwordProtect ? "modal" : ""}
                            data-bs-target={props.passwordProtect ? "#passwordModal" : ""}
                            onClick = {handleClick}
                        >
                            <i className="bi bi-trash"/>
                            Delete
                        </button>
                    </div>
                </small>
            </li>
        </ul>
    )
}