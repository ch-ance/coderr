import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreatePost: React.FC = () => {
    return (
        <div className="create-post">
            <label>Got Code?</label>
            <br />
            <Editor
                apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
                init={{
                    plugins: "link image code",
                    toolbar: " ",
                }}
                onChange={() => {
                    console.log("changing");
                }}
            />
        </div>
    );
};

export default CreatePost;
