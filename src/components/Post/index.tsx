import * as React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface Props {
  username: string;
  value: string;
  language: string;
  id: number;
}

const Post: React.FC<Props> = post => {

    function sayHello() {
        const x = 5;
        const y = 2;
        return "Hello";
    }


  const code = '```function sayHello() {const x = 5;const y = 2;return "Hello";}```';
  return (
    <div className="post-container">
      <ReactMarkdown source={code} 
      renderers={{ code: CodeBlock }} 
      />
      <p>August 15th - {post.username}</p>
    </div>
  );
};

export default Post;
