import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/styles/prism";

interface Props {
  value: string;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={coy}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;