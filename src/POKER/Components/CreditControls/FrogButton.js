import React from "react";
import styled from "styled-components";

const FrogButton = ({ children, onClick, frozen }) => {
  return (
    <FrogStyledButton onClick={onClick} frozen={frozen}>
      {children}
    </FrogStyledButton>
  );
};

export default FrogButton;

const FrogStyledButton = styled.div`
  user-select: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bd1515;
  border-radius: 5px;

  width: clamp(3.75rem, 12.5vw, 9.375rem);
  height: clamp(2.5rem, 5vw, 3.75rem);
  cursor: pointer;
  box-shadow: 0px 4px 1px #111;
  bottom: 5px;
  z-index: 199;

  :active {
    transform: ${(props) => (props.frozen ? "none" : "translateY(3px)")};
    box-shadow: ${(props) =>
      props.frozen ? "0px 4px 1px #111" : "0px 1px 0px #111"};
  }

  h1 {
    color: #ffe4b9;
    text-shadow: 2px 2px 2px #333;
    font-size: clamp(1.625rem, 4.2vw, 3.125rem);
  }
`;
