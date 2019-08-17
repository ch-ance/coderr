import * as React from "react";
import AceEditor from 'react-ace';

const CreatePost: React.FC = () => {

    const [codeText, setCodeText] = React.useState("");

    return (
        <div className="create-post">
            <label>Got Code?</label>
            <br />
            <AceEditor />
        </div>
    );
};

export default CreatePost;
