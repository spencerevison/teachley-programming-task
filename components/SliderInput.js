/**
 * Input range slider
 *
 * @param {Function} handler Callback event handler for input slider
 * @param {String} className Classes to be applied to the input slider
 * @returns
 */
export default function SliderInput({ handler, className }) {
  // Array of objects representing data for discrete slider steps (i.e., different fraction values)
  const marks = [
    {
      value: 0,
      decimal: 1,
      fraction: "whole",
    },
    {
      value: 0.2,
      decimal: 0.5,
      fraction: "1 / 2",
      denominator: 2,
    },
    {
      value: 0.4,
      decimal: 0.333333333333333,
      fraction: "1 / 3",
      denominator: 3,
    },
    {
      value: 0.6,
      decimal: 0.25,
      fraction: "1 / 4",
      denominator: 4,
    },
    {
      value: 0.8,
      decimal: 0.2,
      fraction: "1 / 5",
      denominator: 5,
    },
    {
      value: 1,
      decimal: 0.125,
      fraction: "1 / 8",
      denominator: 8,
    },
  ];

  /**
   * Internal event handler for input change
   *
   * @param {Event} event Event passed when input changed
   */
  const handleChange = (event) => {
    const value = parseFloat(event.target.value);
    const index = marks.findIndex((mark) => mark.value === value);
    handler(marks[index]);
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      onChange={handleChange}
      defaultValue={0}
      className={`range range-primary ${className}`}
      step={0.2}
    />
  );
}
