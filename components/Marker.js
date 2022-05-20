import { Line, Text } from "react-konva";

/**
 * A line and text to represent a marker
 *
 * @param {Number} x The x value for the starting point of the marker
 * @param {Number} y The y value for the starting point of the marker
 * @param {String} label The string value for the marker label
 */
function Marker({ x, y, label }) {
  const markHeight = 12;

  return (
    <>
      <Line
        x={x / 2}
        y={y}
        points={[x / 2, -markHeight, x / 2, markHeight]}
        stroke="black"
      />
      <Text
        x={x - 6}
        y={y + 20}
        text={label}
        fontSize={24}
        fontFamily="Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
      />
    </>
  );
}

export default Marker;
