import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Portal from "../../Portal";
import Wallet from "./Wallet";

const CashModal = () => {
  const walletPopper = useRef(null);

  useEffect(() => {
    walletPopper.current = Wallet;
  }, []);

  return (
    <Portal>
      <Wallet ref={walletPopper} />
    </Portal>
  );
};

export default CashModal;
