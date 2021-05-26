import React from "react";
import styled from "styled-components";
import lock from "../../Assets/miscImages/cabLock.png";

const Lock = () => {
  return (
    <>
      <LockPic src={lock} alt="" />
    </>
  );
};

export default Lock;

const LockPic = styled.img`
  height: 70px;
  width: 70px;
`;
