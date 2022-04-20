import React, {useState} from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Editor from "./Editor";

export default function App(){

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div>
            <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
            <div className="container-fluid ps-2 pt-3 pb-3">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-xs-12 mb-4">
                        <SideBar darkMode = {darkMode}/>
                    </div>

                    <div className="col-sm-3 col-md-9 col-xs-12">
                        <Editor darkMode = {darkMode}/>
                    </div>
                </div>
            </div>
        </div>
    )
}