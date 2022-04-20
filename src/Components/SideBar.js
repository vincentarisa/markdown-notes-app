import React from "react";

export default function SideBar(props){
    return(
        <div className={props.darkMode ? "shadow-lg p-4 rounded dark" : "shadow-lg p-4 rounded bg-light"}>
            <button className="btn btn-success fs-6 mb-3"><i className="bi bi-plus-circle"/> Add Note</button>

            <div className="card" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">First Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Second Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Third Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Fourth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Fifth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Sixth Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>

                    <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Seventh Note</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-eyeglasses"/> View</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-pencil-square"/> Edit</button>
                                <button type="button" className="btn btn-outline-secondary"><i className="bi bi-trash"/> Delete</button>
                            </div>
                        </small>
                    </li>
                </ul>
            </div>
        </div>
    )
}