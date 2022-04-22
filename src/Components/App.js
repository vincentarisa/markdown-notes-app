import React, {useState} from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import NormalEditor from "./NormalEditor";
import MarkdownEditor from "./MarkdownEditor"
import Notes from "./Notes";

export default function App(){
    const [darkMode, setDarkMode] = useState(false)
    const [editorType, setEditorType] = useState(true)

    function toggleEditorType(){
        setEditorType(PrevEditorType => !PrevEditorType)
    }

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div>
            <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
            <div className="container-fluid ps-2 pt-2">
                <div className="row">
                    <div className="col-sm-6 col-md-3 col-xs-12 mb-4">
                        <SideBar darkMode = {darkMode}/>
                    </div>

                    <div className="col-sm-6 col-md-9 col-xs-12">
                        {editorType === true && <NormalEditor darkMode = {darkMode} editorType = {editorType} toggleEditorType = {toggleEditorType}/>}
                        {editorType === false && <MarkdownEditor darkMode = {darkMode} editorType = {editorType} toggleEditorType = {toggleEditorType}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}