/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function TextEditor({ name, control, label, deaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="z2q6q4y5q2x5w2p5q2g2j5z2o5q2l2g2c2p2y2k2n2a2q2=="
            initialValue={deaultValue}
            init={{
              initialValye: deaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default TextEditor;
