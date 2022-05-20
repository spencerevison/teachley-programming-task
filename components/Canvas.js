import { Layer, Arrow, Stage, Text } from "react-konva";
import Marker from "./Marker";

/**
 * Responsible for drawing the line representing the current fraction value.
 *
 * @param {Object} sliderVal The object representing the current slider input value
 */
export default function Canvas({ sliderVal }) {
  const y = 60;
  const xMargin = 20;
  const xOffest = 2;
  const width = 500;

  // Construct dyamic markers for representing current fraction
  let dynamicMarkers = [];
  if (sliderVal.value > 0) {
    const xIncrement = width / sliderVal.denominator;
    let xVal = xOffest + xMargin + xIncrement;

    for (let i = 0; i < sliderVal.denominator - 1; i++) {
      dynamicMarkers.push(<Marker x={xVal} y={y} key={i} />);
      xVal += xIncrement;
    }
  }

  return (
    <Stage width={800} height={120}>
      <Layer>
        <Arrow
          x={xOffest}
          y={y}
          points={[0, 0, xOffest + xMargin * 2 + width, 0]}
          stroke="black"
          pointerAtBeginning
        />
        <Marker x={xOffest + xMargin} y={y} label="0" />
        <Marker x={xOffest + xMargin + width} y={y} label="1" />
        <Text
          x={xOffest + width / 2 - 5}
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
