import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
    username: string;
    code: string;
    id: number;
}

const Post: React.FC<Props> = props => {
    return (
        <div className="post-container">
            
            <SyntaxHighlighter language="javascript">
                {props.code}
            </SyntaxHighlighter>

            {/* <h2>Post # {props.id}</h2>
            <p>{props.code}</p>
            <p>
                {Date.now()} - {props.username}
            </p> */}
        </div>
    );
};

export default Post;
