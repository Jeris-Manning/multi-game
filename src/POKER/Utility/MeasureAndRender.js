import React, { useState, useEffect, useRef, Children } from "react";
import styled from "styled-components";

const MeasureAndRender = ({ stretch, bounce = null }) => {
  const divEl = useRef(null);

  const [measurement, setMeasurement] = useState(null);
  const [hasMeasured, setHasMeasured] = useState(false);

  useEffect(() => {
    setMeasurement(divEl.getBoundingClientRect());
    setHasMeasured(true);
    const windowSizeListener = debounce(() => {
      setMeasurement(divEl.getBoundingClientRect());
    }, bounce || 100);

    window.addEventListener("resize", windowSizeListener);
    return () => {
      window.removeEventListener("resize", windowSizeListener);
    };
  }, [input]);

  return stretch ? (
    <StretchMNR ref={divEl}>{hasMeasured && Children(measurement)}</StretchMNR>
  ) : (
    <MNR ref={divEl}>{hasMeasured && Children(measurement)}</MNR>
  );
};

export default MeasureAndRender;

const StretchMNR = styled.div`
  position: "absolute";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
