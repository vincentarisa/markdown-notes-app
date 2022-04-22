import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function NormalEditor(props){
    const [value, setValue] = useState('');

    return(
        <div className={props.darkMode ? "card dark mb-3" : "card mb-3"}>
            <div className="card-header p-3">
                <div className="btn-group">
                    <button type="button" className={props.editorType ? "btn btn-primary disabled" : "btn btn-primary"} onClick={props.toggleEditorType}>Normal Editor</button>
                    <button type="button" className={props.editorType === false ? "btn btn-primary disabled" : "btn btn-primary "} onClick={props.toggleEditorType}>Markdown Editor</button>
                </div>
            </div>

            <div className="card-body custom-editor-body">
                <ReactQuill
                    className="custom-normal-editor"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}