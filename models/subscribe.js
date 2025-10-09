async function createSubscriber(userInputValues) {
  const url = process.env.CREATE_SUBSCRIBER_ENDPOINT;
  const payload = {
    first_name: userInputValues.firstName,
    email_address: userInputValues.email,
    state: "inactive",
    fields: {},
  };

  const options = {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": process.env.CONVERTKIT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return { status: response.status, ok: response.ok, data };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addSubscriberToFormByEmail(userInputValues) {
  const url = process.env.ADD_SUBSCRIBER_TO_FORM_BY_EMAIL;
  const payload = {
    email_address: userInputValues.email_address,
    referrer: "",
  };

  const options = {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": process.env.CONVERTKIT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return { status: response.status, ok: response.ok, data };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default Object.freeze({
  createSubscriber,
  addSubscriberToFormByEmail,
});
