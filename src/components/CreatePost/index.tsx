import * as React from "react";
import { Editor } from '@tinymce/tinymce-react';

const CreatePost: React.FC = () => {
    return (
        <div className="create-post">
            <label>Got Code?</label>
            <br />
            <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={() => {
            console.log("changing")
        }}
      />
        </div>
    );
};

export default CreatePost;
