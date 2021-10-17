import React, { useContext } from "react";
import styled, { keyframes, css } from "styled-components";
import Five from "../assets/5.png";
import Ten from "../assets/10.png";
import Twenty from "../assets/20.png";
import Billfold from "../assets/wallet.png";
import { CreditContext } from "../../App";

const Wallet = ({ state, dispatch }) => {
  const { creditDispatch } = useContext(CreditContext);

  const addCredit = (credits) => {
    creditDispatch({ type: "ADD_CREDIT", credits });
  };

  return (
    <WalletDiv show={state.wallet}>
      <div>
        <img
          className="twenty"
          src={Twenty}
          alt=""
          onClick={() => addCredit(2000)}
        />
        <img className="ten" src={Ten} alt="" onClick={() => addCredit(1000)} />
        <img
          className="five"
          src={Five}
          alt=""
          onClick={() => addCredit(500)}
        />
        <h3 onClick={() => dispatch({ type: "TOGGLE_WALLET" })}>Put Away</h3>
      </div>
    </WalletDiv>
  );
};

export default Wallet;

const walletSlide = keyframes`

from {
  bottom: -100%;
}

to {
 bottom: 0;
}

`;

const walletReturn = keyframes`

from {
  transform: translateY(0%);
}

to {
  transform: translateY(100%);
}

`;

const WalletDiv = styled.div`
  position: absolute;
  display: ${(props) => (props.show === null ? "none" : "block")};
  animation: ${(props) =>
    props.show
      ? css`
          ${walletSlide} 1s 1 normal forwards
        `
      : css`
          ${walletReturn} 1s 1 normal forwards
        `};

  width: 551px;
  height: 711px;
  background-image: url(${Billfold});
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 199;
  bottom: 0;
  right: 20px;
  div {
    width: inherit;
    height: inherit;
    position: relative;
    h3 {
      position: absolute;
      color: rgba(255, 255, 255, 0.9);
      bottom: 270px;
      transform: rotate(12deg);
      left: 162px;
      width: 125px;
      background: rgba(255, 0, 0, 0.7);
      height: 70px;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
      z-index: 205;
      cursor: pointer;
    }

    img {
      position: absolute;
      cursor: pointer;
    }
    .twenty {
      z-index: 200;
      top: 81px;
      left: 61px;

      transform: rotate(-46deg);
    }
    .ten {
      z-index: 201;
      top: 35px;
      right: 149px;
      transform: rotate(-26deg);
    }
    .five {
      z-index: 202;
      top: 19px;
      right: 30px;
      transform: rotate(-5deg);
    }
  }
`;
