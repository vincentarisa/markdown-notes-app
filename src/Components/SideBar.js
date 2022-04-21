import React from "react";

export default function SideBar(props){
    return(
        <div className={props.darkMode ? "card shadow-lg rounded dark" : "card shadow-lg rounded bg-light"}>
            <div className="card-header p-3">
                <div className="row">
                    <div className="col-6">
                        <button type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#noteModal"
                        >
                            <i className="bi bi-plus-circle" /> Add Note
                        </button>

                        <div className="modal fade" id="noteModal"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalLabel">New Note</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="input-group mb-3 pt-3 px-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">
                                                    Note Title
                                                </span>
                                                <input type="text"
                                                       className="form-control"
                                                       aria-describedby="inputGroup-sizing-default"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button type="button" className="btn btn-primary w-45">Use Normal Editor</button>
                                        <button type="button" className="btn btn-primary w-45">Use Markdown Editor</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Notes..." />
                            <button className="btn btn-primary" type="button" id="button-addon2"><i className="bi bi-search"/></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-body custom-card-body">
                <ul className="list-group list-group-flush">
                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">First Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Second Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Third Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Fourth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Fifth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Sixth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Seventh Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <div className="btn-group btn-group-sm">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bi bi-download"/> Download
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-file-pdf"/> pdf</li>
                                        <li className="dropdown-item custom-dropdown-item border-2 border-bottom"><i className="bi bi-markdown"/> markdown</li>
                                        <li className="dropdown-item custom-dropdown-item"><i className="bi bi-filetype-html"/> html</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>
                </ul>
            </div>

            <div className="card-footer text-center">
                <p>Share on</p>
                <div className="d-flex justify-content-center p-2">
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-whatsapp"/></button>
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-github"/></button>
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-facebook"/></button>
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-twitter"/></button>
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-linkedin"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}