import React from "react";

export default function Notes(props){
    return(
        <ul className="list-group list-group-flush">
            <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                        {props.passwordProtected && props.locked && <i className="bi bi-lock-fill custom-icon-lock"/>}
                        {!props.locked && <i className="bi bi-unlock-fill custom-icon-lock"/>}
                        {props.noteTitle}
                    </h5>
                    <small className="text-muted">{props.creationDate}</small>
                </div>
                <p className="mb-1">{props.description}</p>

                {/*Provide Password Modal */}
                <div className="modal fade" id="passwordModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form onSubmit={props.handleSubmit}>
                                <div className="modal-body">
                                    <div className="input-group mb-3 pt-3 px-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                        Password
                                    </span>
                                        <input
                                            type={props.showPassword ? "text" : "password"}
                                            className="form-control"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="password"
                                            value={props.passwordData.password}
                                            onChange={props.handleChange}
                                        />
                                    </div>

                                    <div className="p-3">
                                        <input
                                            type = "checkbox"
                                            id = "showPassword"
                                            className="form-check-input"
                                            onClick={props.togglePassword}
                                        />
                                        <label htmlFor="showPassword" className="form-check-label">&nbsp; Show Password</label><br/>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary w-100" onClick={props.confirmPassword} data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*Delete Confirmation Modal */}
                <div className="modal fade" id="deleteConfirmationModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div>
                                    <div className="text-center">
                                        <i className="bi bi-exclamation-triangle-fill text-danger custom-icon"/>
                                        <h5>Are you sure you want to delete this note</h5>
                                    </div>
                                    <div className="d-flex p-3">
                                        <button type="submit" className="btn btn-danger w-100" onClick={props.confirmDeletion} data-bs-dismiss="modal">Accept</button>
                                        <button type="button" className="btn btn-danger w-100 ms-3" data-bs-dismiss="modal">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <small>
                    {props.providePassword &&
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#passwordModal"
                            onClick={()=> props.confirmPassword(props.id)}
                        >
                            <i className="bi bi-key-fill"/>
                            &nbsp;Unlock
                        </button>
                    }

                    {props.providePassword === false &&
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
                                    &nbsp;Download
                                </button>
                                <ul className="dropdown-menu border-dark" aria-labelledby="btnGroupDrop1">
                                    <li
                                        className="dropdown-item custom-dropdown-item border-1 border-dark border-bottom"
                                    >
                                        <i className="bi bi-file-pdf"/>
                                        &nbsp;pdf
                                    </li>

                                    <li
                                        className="dropdown-item custom-dropdown-item border-1 border-dark border-bottom"
                                    >
                                        <i className="bi bi-markdown"/>
                                        &nbsp;markdown
                                    </li>

                                    <li
                                        className="dropdown-item custom-dropdown-item"
                                    >
                                        <i className="bi bi-filetype-html"/>
                                        &nbsp;html
                                    </li>
                                </ul>
                            </div>

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                            >
                                <i className="bi bi-eyeglasses"/>
                                &nbsp;View
                            </button>

                            {props.unlocked &&
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={props.manuallyLockNote}
                                >
                                    <i className="bi bi-lock"/>
                                    &nbsp;Lock
                                </button>
                            }

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                            >
                                <i className="bi bi-pencil-square"/>
                                &nbsp;Edit
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteConfirmationModal"
                            >
                                <i className="bi bi-trash"/>
                                &nbsp;Delete
                            </button>
                        </div>
                    }
                </small>
            </li>
        </ul>
    )
}