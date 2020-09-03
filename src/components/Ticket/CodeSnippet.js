import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { StyledCodeSnippet } from "../../styled-components/Ticket_Styles";

export const CodeSnippet = props => {

  const code = () => {
    let [language, codeSnippet] = props.codeSnippet.split('~!~');
    
    language = language === "monospace" ? "text" : language.toLowerCase();
    
    return {language, codeSnippet};
  }
  return props.codeSnippet ? (
    <StyledCodeSnippet>
      <SyntaxHighlighter
        language={code().language}
        style={tomorrowNightEighties}
        customStyle={{
          fontFamily: "Courier",
          width: "100%",
          fontSize: "1.2rem"
        }}
      >
        {code().codeSnippet}
      </SyntaxHighlighter>
    </StyledCodeSnippet>
  ) : (
    <div />
  );
};
