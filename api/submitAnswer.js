/**
 * Submits answer to Teachley API
 *
 * @param {Object} data Data to be submitted to API
 * @returns Response json if successful. Otherwise false
 */
const submitAnswer = async (data) => {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = "https://data.teachley.com/api/m1/test/";

  // Form the request for sending data to the server.
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  // Send the form data to our forms API and get a response.
  try {
    const response = await fetch(endpoint, options);

    // Handle the response
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export default submitAnswer;
