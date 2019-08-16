import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
    username: string;
    code: string;
    language: string;
    id: number;
}

const Post: React.FC<Props> = post => {
    return (
        <div className="post-container">
            <SyntaxHighlighter language={post.language}>
                {post.code}
            </SyntaxHighlighter>
            <p>
                August 15th - {post.username}
            </p>
        </div>
    );
};

export default Post;
