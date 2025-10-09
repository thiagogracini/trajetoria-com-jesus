test("POST to /api/v1/subscribe should return 201", async () => {
  const response = await fetch("http://localhost:3000/api/v1/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: "dev",
      email: "dev@thiagogracini.com.br",
    }),
  });

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(201);
});
