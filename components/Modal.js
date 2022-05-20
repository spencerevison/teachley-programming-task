/**
 * Modal component to show form submission results.
 *
 * @param {JSX | String} modalHeading The value used for the modal heading
 * @param {JSX | String} modalBody The value used for the modal body
 * @param {Boolean} modalVisible Whether modal is visible or not
 * @param {Function} setModalVisible Function to set modal visible or not
 */
function Modal({ modalHeading, modalBody, modalVisible, setModalVisible }) {
  const handleChange = () => {
    setModalVisible(false);
  };

  return (
    <>
      <input
        type="checkbox"
        id="modal"
        className="modal-toggle"
        onChange={handleChange}
        checked={modalVisible}
      />
      <label htmlFor="modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="modal"
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{modalHeading}</h3>
          <div className="py-4">{modalBody}</div>
        </label>
      </label>
    </>
  );
}

export default Modal;
