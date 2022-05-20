import { Layer, Arrow, Stage, Text } from "react-konva";
import React, { useState, useEffect } from "react";
import Marker from "./Marker";

/**
 * Responsible for drawing the line representing the current fraction value.
 *
 * @param {Object} sliderVal The object representing the current slider input value
 */
function Canvas({ sliderVal, width }) {
  const [stageWidth, setStageWidth] = useState(window.innerWidth - 64);
  const [stageScale, setStageScale] = useState(1);

  const y = 60;
  const xMargin = 20;
  const xOffest = 2;
  const innerArrowWidth = 500;

  /**
   * Set stage width and scale component states on window resize
   */
  const resizeHandler = () => {
    setStageWidth(window.innerWidth - 64);
    setStageScale(Math.min(1, (window.innerWidth - 64) / 550));
  };

  /**
   * Window resize listener
   */
  useEffect(() => {
    window.onresize = resizeHandler;
  }, []);

  // Construct dyamic markers for representing current fraction
  let dynamicMarkers = [];
  if (sliderVal.value > 0) {
    const xIncrement = innerArrowWidth / sliderVal.denominator;
    let xVal = xOffest + xMargin + xIncrement;

    for (let i = 0; i < sliderVal.denominator - 1; i++) {
      dynamicMarkers.push(<Marker x={xVal} y={y} key={i} />);
      xVal += xIncrement;
    }
  }

  return (
    <Stage
      width={stageWidth}
      height={100}
      scaleX={stageScale}
      scaleY={stageScale}
      className="max-w-[550px] overflow-hidden"
    >
      <Layer>
        <Arrow
          x={xOffest}
          y={y}
          points={[0, 0, xOffest + xMargin * 2 + innerArrowWidth, 0]}
          stroke="black"
          pointerAtBeginning
        />
        <Marker x={xOffest + xMargin} y={y} label="0" />
        <Marker x={xOffest + xMargin + innerArrowWidth} y={y} label="1" />
        <Text
          x={xOffest + innerArrowWidth / 2 - 5}
          y={y - 50}
          text={sliderVal.fraction}
          fontSize={24}
          align="center"
          fontFamily="Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
        />
        {dynamicMarkers}
      </Layer>
    </Stage>
  );
}

export default Canvas;
