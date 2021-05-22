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
  // align-self: flex-end;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bd1515;
  border-radius: 5px;
  height: 60px;
  line-height: 60px;
  // width: 200px;
  width: 80%;
  cursor: pointer;
  box-shadow: 0px 4px 1px #111;
  bottom: 5px;
  z-index: 199;

  :active {
    transform: ${(props) => (props.frozen ? "none" : "translateY(3px)")} ;
    box-shadow: ${(props) =>
      props.frozen ? "0px 4px 1px #111" : "0px 1px 0px #111"};
  }

  h1 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 3rem;
    @media (max-width: 600px) {
      font-size: 2.6rem;
    }
  }
}

`;