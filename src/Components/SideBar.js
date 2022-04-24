import React, {useState} from "react";
import Notes from "./Notes";
import NotesData from "./notesData";

export default function SideBar(props){
    const date = new Date();
    const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const [showPassword, setShowPassword] = useState(false)
    const [passwordData, setPasswordData] = useState({password : ""})
    const [providePassword, setProvidePassword] = useState(true)
    const [locked, setLocked] = useState(true)
    const [unlocked, setUnlocked] = useState(false)
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)

    console.log(providePassword)
    const [formData, setFormData] = useState({
        noteTitle : "",
        description: "",
        creationDate: currentDate,
        notes : "",
        passwordProtect: false,
        password: "",
        confirmPassword: ""
    })

    setTimeout(function() {
        if(unlocked){
            setProvidePassword(prevProvidePassword => !prevProvidePassword)
            setLocked(prevLocked => !prevLocked)
            setUnlocked(prevUnlocked => !prevUnlocked)
        }
    },60000);

    function confirmDeletion(){
        setDeleteConfirmation(prevDeleteConfirmation => !prevDeleteConfirmation)
    }

    function togglePassword(){
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function manuallyLockNote(){
        setProvidePassword(prevProvidePassword => !prevProvidePassword)
        setLocked(prevLocked => !prevLocked)
        setUnlocked(prevUnlocked => !prevUnlocked)
    }

    function confirmPassword (id){
        const storedPassword = props.password;
        if(storedPassword === passwordData.password){
            setProvidePassword(prevProvidePassword => !prevProvidePassword)
            setLocked(prevLocked => !prevLocked)
            setUnlocked(prevUnlocked => !prevUnlocked)
            setPasswordData({password : ""})
        }else{
            console.log("Wrong Password")
        }
    }

    const displayNotes = NotesData.map(displayNote => {
        return(
            <Notes
                key = {displayNote.id}
                {...displayNote}
                darkMode = {props.darkMode}
                showPassword = {showPassword}
                togglePassword = {togglePassword}
                confirmPassword = {confirmPassword}
                providePassword = {providePassword}
                locked = {locked}
                passwordData = {passwordData.password}
                handleChange = {handleChange}
                confirmDeletion = {confirmDeletion}
                unlocked = {unlocked}
                manuallyLockNote = {manuallyLockNote}
                deleteConfirmation = {deleteConfirmation}
            />
        )
    })

    return(
        <div className={props.darkMode ? "card shadow-lg rounded dark" : "card shadow-lg rounded bg-light"}>
            <div className="card-header p-3">
                <div className="row">
                    <div className="col-6">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#noteModal"
                        >
                            <i className="bi bi-plus-circle" />
                            &nbsp; Add Note
                        </button>

                        {/*Add Note Modal */}
                        <div className="modal fade" id="noteModal" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalLabel">New Note</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                   <form onSubmit={handleSubmit}>
                                       <div className="modal-body">
                                           <div className="input-group mb-3 pt-3 px-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">
                                                    Note Title
                                                </span>
                                               <input
                                                   type="text"
                                                   className="form-control"
                                                   aria-describedby="inputGroup-sizing-default"
                                                   name="noteTitle"
                                                   value={formData.noteTitle}
                                                   onChange={handleChange}
                                               />
                                           </div>

                                           <div className="input-group mb-3 pt-3 px-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">
                                                    Description
                                                </span>
                                               <input
                                                   type="text"
                                                   className="form-control"
                                                   aria-describedby="inputGroup-sizing-default"
                                                   name="description"
                                                   value={formData.description}
                                                   onChange={handleChange}
                                               />
                                           </div>

                                           <div className="input-group mb-3 pt-3 px-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">
                                                    Date
                                                </span>
                                               <input
                                                   type="text"
                                                   className="form-control"
                                                   aria-describedby="inputGroup-sizing-default"
                                                   name="creationDate"
                                                   value={formData.creationDate}
                                                   onChange={handleChange}
                                                   disabled
                                               />
                                           </div>

                                           <div className="p-3">
                                               <input
                                                   type = "checkbox"
                                                   id = "passwordProtected"
                                                   className="form-check-input"
                                                   name = "passwordProtect"
                                                   checked = {formData.passwordProtect}
                                                   onChange = {handleChange}
                                               />
                                               <label htmlFor="passwordProtected" className="form-check-label">&nbsp; Protect Note With Password</label><br/>
                                           </div>

                                           {formData.passwordProtect &&
                                               <div className="input-group mb-3 pt-3 px-3">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                                        Password
                                                    </span>
                                                   <input
                                                       type={showPassword ? "text" : "password"}
                                                       className="form-control"
                                                       aria-describedby="inputGroup-sizing-default"
                                                       name="password"
                                                       value={formData.password}
                                                       onChange={handleChange}
                                                   />
                                               </div>
                                           }

                                           {formData.passwordProtect &&
                                               <div className="input-group mb-3 pt-3 px-3">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                                        Confirm Password
                                                    </span>
                                                   <input
                                                       type={showPassword ? "text" : "password"}
                                                       className="form-control"
                                                       aria-describedby="inputGroup-sizing-default"
                                                       name="confirmPassword"
                                                       value={formData.confirmPassword}
                                                       onChange={handleChange}
                                                   />
                                               </div>
                                           }

                                           {formData.passwordProtect &&
                                               <div className="p-3">
                                                   <input
                                                       type = "checkbox"
                                                       id = "showPassword"
                                                       className="form-check-input"
                                                       onClick={togglePassword}
                                                   />
                                                   <label htmlFor="showPassword" className="form-check-label">&nbsp; Show Password</label><br/>
                                               </div>
                                           }
                                       </div>
                                       <div className="modal-footer d-flex justify-content-center">
                                           <button type="button" className="btn btn-primary w-45">Use Normal Editor</button>
                                           <button type="button" className="btn btn-primary w-45">Use Markdown Editor</button>
                                       </div>
                                   </form>
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
                {displayNotes}
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