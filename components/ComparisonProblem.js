import React, { useState } from "react";
import submitAnswer from "../api/submitAnswer";
import Modal from "./Modal";
import TextInput from "./TextInput";
import SliderInput from "./SliderInput";
import Canvas from "./Canvas";

export default function ComparisonProblem() {
  const [sliderVal, setSliderVal] = useState({});
  const [textVal, setTextVal] = useState("");
  const [modalHeading, setModalHeading] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent duplicate submissions
    if (!submitting) {
      setSubmitting(true);

      // Get data from the form.
      const data = {
        fraction: sliderVal.fraction,
        text: textVal,
      };

      const response = await submitAnswer(data);
      if (response) {
        setModalHeading("Answer Submitted!");
        setModalBody(
          <>
            <p>Congratulations! You successfully submitted your answer:</p>
            <p className="mt-4">
              <span className="block">Fraction: {response.fraction}</span>
              <span className="mt-4 block">Text: {response.text}</span>
            </p>
          </>
        );
      } else {
        setModalHeading("Hmmm something went wrong...");
        setModalBody(
          <>
            <p>There was a problem submitting your answer.</p>
          </>
        );
      }
      setModalVisible(true);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal {...{ modalHeading, modalBody, setModalVisible, modalVisible }} />
      <h1 className="text-5xl leading-tight sm:text-6xl">Comparison Problem</h1>
      <p className="my-8 text-xl sm:text-2xl">
        Mark says 1/4 of his candy bar is smaller than 1/5 of the same candy bar. Is Mark right? Yes
        or No. Draw a picture or use words to explain why you think Mark is right or wrong.
      </p>
      <Canvas {...{ sliderVal }} />
      <SliderInput handler={setSliderVal} className="ml-32 w-72" />
      <TextInput handler={setTextVal} className="mt-8 w-[550px]" />
      <button type="submit" className="btn btn-secondary mt-8" disabled={submitting}>
        Submit Your Answer
      </button>
    </form>
  );
}
