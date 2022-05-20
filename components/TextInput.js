/**
 * Text input component
 *
 * @param {Function} handler Callback event handler for input change
 * @param {String} handler Classes to be applied to component
 */
export default function TextInput({ handler, className }) {
  /**
   * Internal event handler for input change
   *
   * @param {Event} event Event passed when input changed
   */
  const handleChange = (event) => {
    handler(event.target.value);
  };

  return (
    <div className={className}>
      <label
        htmlFor="message"
        className="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-400"
      >
        Is Mark right?
      </label>
      <textarea
        id="message"
        rows="2"
        className="textarea textarea-primary w-full bg-gray-50 text-lg"
        placeholder="Explain why he is right or wrong"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
