import React, {useState} from "react";
import NotesData from "./notesData";

export default function Notes(props){
    const [notesData, setNotesData] = useState(NotesData)
    const [locked, setLocked] = useState(true)
    const [automaticLock, setAutomaticLock] = useState(false)
    const [manualLock, setManualLock] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [activeNote, setActiveNote] = useState(null);

    //Function that holds unlock button classes when note is active or inactive
    function getButtonClass(index) {
        return index === activeNote?.id ?
            "active btn btn-outline-secondary btn-sm" : "inactive btn btn-outline-secondary btn-sm";
    }

    //Function to open password Prompt
    function OpenPasswordModal(){
        const storedPassword = props.password
        const [showPassword, setShowPassword] = useState(false)
        const [passwordData, setPasswordData] = useState({password : ""})
        const [passwordSuccess, setPasswordSuccess] = useState(true)
        const [passwordEmpty, setPasswordEmpty] = useState(true)

        //Function to show and hide the password
        function togglePassword(){
            setShowPassword(prevShowPassword => !prevShowPassword)
        }

        //Function to check for entered password
        function handlePasswordChange(event) {
            const {name, value} = event.target
            setPasswordData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }

        //Function to handle the submission of the password form
        function handlePasswordSubmit(event){
            event.preventDefault()
        }

        //Function to confirm provide password matches the stored password
        function confirmPassword(id){
            if(storedPassword === passwordData.password){
                setNotesData(prevProvidePassword => {
                    return prevProvidePassword.map((provPassword) => {
                        return provPassword.id === id ? {...provPassword, passwordProtected : !provPassword.passwordProtected} : provPassword
                    })
                })
                setLocked(prevLocked => !prevLocked)
                setManualLock(prevManualLock => !prevManualLock)
                setAutomaticLock(prevAutomaticLock => !prevAutomaticLock)
                setShowPasswordModal(prevShowPasswordModal => !prevShowPasswordModal)
                setPasswordData({password : ""})

                //Timeout function to lock password protected notes after given no. of seconds
                setTimeout(function() {
                    setLocked(true)
                    setManualLock(false)
                    setAutomaticLock(false)
                },60000);
            }
            else if(passwordData.password === ""){
                setPasswordEmpty(true)
                setPasswordSuccess(false)
            }
            else{
                setPasswordEmpty(false)
                setPasswordSuccess(false)
            }
        }

        return(
            <div className="active">
                <form onSubmit={handlePasswordSubmit}>
                    <div className="input-group input-group-sm mb-3 pt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">
                            Password
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            aria-describedby="inputGroup-sizing-default"
                            name="password"
                            value={passwordData.password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={togglePassword}
                        >
                            {showPassword ? <i className="bi bi-eye-fill"/> : <i className="bi bi-eye-slash-fill"/>}
                        </button>
                    </div>

                    {!passwordSuccess && !passwordEmpty &&
                        <p className="custom-alert bg-danger pb-3 pt-1 px-2">
                            <i className="bi bi-exclamation-triangle"/>
                            &nbsp;Wrong password. Please try again.
                        </p>
                    }

                    {!passwordSuccess && passwordEmpty &&
                        <p className="custom-alert bg-danger pb-3 pt-1 px-2">
                            <i className="bi bi-exclamation-triangle"/>
                            &nbsp;Password field cannot be empty.
                        </p>
                    }

                    <div className="row gx-2">
                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-primary btn-sm w-100"
                                onClick={() => confirmPassword(props.id)}
                            >
                                Unlock
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-primary btn-sm w-100"
                                onClick={() => setShowPasswordModal(prevShowPasswordModal => !prevShowPasswordModal)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    //Function to manually lock the password protected notes
    function manuallyLockNote(){
        setLocked(true)
        setManualLock(false)
        setAutomaticLock(false)
    }

    return(
        <ul className="list-group list-group-flush">
            <li className={props.darkMode ? "list-group-item border-1 border-light rounded mb-2" : "list-group-item border-1 border-dark rounded mb-2"}>

                {/*Notes Html Code*/}
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                        {props.passwordProtected && locked && <i className="bi bi-lock-fill custom-icon-lock"/>}
                        {!locked && <i className="bi bi-unlock-fill custom-icon-lock"/>}
                        {props.noteTitle}
                    </h5>
                    <small className="text-muted">{props.creationDate}</small>
                </div>
                <p className="mb-1">{props.description}</p>

                {/*Provide Password Modal */}
                {showPasswordModal ? <OpenPasswordModal object={activeNote} /> : null}

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

                {/*Notes Buttons*/}
                <small>
                    {locked && !showPasswordModal && props.passwordProtected &&
                        <div>
                            <button
                                type="button"
                                key={props.id}
                                onClick={() => {
                                    setActiveNote(props.id);
                                    setShowPasswordModal(prevShowPasswordModal => !prevShowPasswordModal);
                                }}
                                className={getButtonClass(props.id)}
                            >
                                <i className="bi bi-key-fill"/>
                                &nbsp;Unlock
                            </button>
                        </div>
                    }

                    {!locked &&
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

                            {!locked &&
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={manuallyLockNote}
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

                    {!props.passwordProtected &&
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