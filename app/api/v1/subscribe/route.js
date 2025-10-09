import subscribe from "@models/subscribe.js";

export async function POST(request) {
  let subscriberAddedToForm = "";
  const userInputValues = await request.json();
  const createdSubscriber = await subscribe.createSubscriber(userInputValues);

  if (createdSubscriber.status === 200 || createdSubscriber.status === 201) {
    subscriberAddedToForm = await subscribe.addSubscriberToFormByEmail(
      createdSubscriber.data.subscriber,
    );
  }

  return Response.json(subscriberAddedToForm, {
    status: 201,
  });
}

export async function GET(request) {
  const userInputValues = request.body;
  return new Response("Success!", {
    status: 200,
  });
}
