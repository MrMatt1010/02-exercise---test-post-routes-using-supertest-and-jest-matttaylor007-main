// FIXME! Write tests for the POST routes
const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("POST /wishlists creates a new wishlist", async () => {
    const body = {
      productId: "614abf0a93e8e80ace792ac6",
    };
    const response = await request(app).post("/wishlists").send(body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining(body));
  });

  test("POST /orders creates a new order", async () => {
    const body = {
      groceries: [
        {
          id: "615915303a9ea9532717f95f",
          qty: 2,
        },
        {
          id: "6159153639d0db80bed5ec74",
          qty: 1,
        },
      ],
    };
    const response = await request(app).post("/orders").send(body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining(body));
  });

  test("POST /policies creates a new policy", async () => {
    const body = {
      planType: "Full",
      petsName: "Rex",
      customersName: "Mary Poppins",
      expiry: "2023-03-09T11:00:00.000Z",
    };
    const response = await request(app).post("/policies").send(body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining(body));
  });
});
