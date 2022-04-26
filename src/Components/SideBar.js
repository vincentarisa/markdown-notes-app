import React, {useState} from "react";
import Notes from "./Notes";

export default function SideBar(props){
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)

    //Function to perform the deleting of a note
    function confirmDeletion(){
        setDeleteConfirmation(prevDeleteConfirmation => !prevDeleteConfirmation)
        console.log("Deleted Succesfully : " + props.noteTitle)
    }

    return(
        <>
            <Notes
                key = {props.id}
                id = {props.id}
                noteTitle = {props.noteTitle}
                description = {props.description}
                creationDate = {props.creationDate}
                notes = {props.notes}
                passwordProtected = {props.passwordProtected}
                password = {props.password}

                //States & Functions
                darkMode = {props.darkMode}
                showPassword = {props.showPassword}
                togglePassword = {props.togglePassword}
                deleteConfirmation = {deleteConfirmation}
                confirmDeletion = {confirmDeletion}
            />
        </>
    )
}