const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/index");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });


  describe("GET /api/users", () => {
    it("should return all users", async () => {
      const res = await request(app).get("/Jant/user/get");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });