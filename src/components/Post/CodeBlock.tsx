// import * as React from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { style } from "react-syntax-highlighter/dist/styles/prism";

// interface Props {
//   value: string;
//   language: string;
// }

// const CodeBlock: React.FC<Props> = props => {
//   return (
//     <SyntaxHighlighter
//       language={props.language}
//       // style={coy}
//     >
//         {props.value}
//     </SyntaxHighlighter>
//   );
// };

// export default CodeBlock;


import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";

class CodeBlock extends React.PureComponent<{language: string, value: string}> {

  render() {
    return (
      <SyntaxHighlighter language={"js"}>
        {this.props.value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;