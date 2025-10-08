test("GET to /api/v1/subscribe should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/subscribe");
  expect(response.status).toBe(200);
});
