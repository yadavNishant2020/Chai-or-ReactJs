import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
function TextEditor() {
  return (

    <Editor
    initialValue="default value"
    init={
        {
            branding: false,
            height: 500,
            menubar: true,
            plugins:
        }
    }
    />
    )
}

export default TextEditor