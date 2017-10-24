import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.3rem;
  background: ${props => props.background || "transparent"};
  border-radius: 3px;
  display: inline-block;
  border: 2px solid #000;
  cursor: pointer;
  transition: 0.25s;
  will-change: transform;
  ${props => props.italic && "font-style: italic;"} &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
