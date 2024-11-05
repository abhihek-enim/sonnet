/* eslint-disable react/prop-types */
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Dialogbox.css"; // Import your CSS file for styling

const Dialogbox = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved content:", content);
    // Close the dialog after saving
    onClose();
  };

  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="popup-dialog-overlay">
      <div className="popup-dialog">
        <h2>Add Your Content</h2>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
        <div className="button-container">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogbox;
