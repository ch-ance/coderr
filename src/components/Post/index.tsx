import * as React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  username: string;
  code: string;
  language: string;
  id: number;
}

const Post: React.FC<Props> = post => {
  const code = '`console.log("hello world")`';
  return (
    <div className="post-container">
      <ReactMarkdown />
      <p>August 15th - {post.username}</p>
    </div>
  );
};

export default Post;
