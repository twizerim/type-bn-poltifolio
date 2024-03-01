import app from "./server";
import request from "supertest";
import mongoose,{set} from "mongoose";
import { response } from "express";
// describe("api endPoint",()=>{
// let token : string;
// let brandId : number;
beforeAll(async () => {
    mongoose.connect("mongodb+srv://gedeonprogrammer:programmer12@cluster0.8sikbdc.mongodb.net/Andela-poltifolio")
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("App testing", () =>{
    it("Should return success", async () => {
        const res = await request(app).get("/");
        expect(res.status).toEqual(200);
    });
});
describe("user testing", () =>{
it("Should create a user and return success", async () => {
       const res = await request(app)
       .post("/create")
       .send({
        firstname:"TWAGIRA",
        lastname:"Goodu",
        email: "twagira@gmail.com",
        phone:"250733117441",
        password:"Diane@123",
        confrimpassword:"Diane@123"
       })
       expect(res.status).toEqual(201);
     });
    it("Should return that the user successfully logged in", async () => {
           const res = await request(app)
           .post("/login")
           .send({
             email: "geden@gmail.com",
             password: "Gedeon@12",
           })
           expect(res.status).toEqual(201);
    });
    it("Should return that the user found", async () => {
           const res = await request(app)
           .get("/")
           expect(res.status).toEqual(200);
});
    it("Should return that all users found", async () => {
          const res = await request(app)
          .get("/")
          expect(res.status).toEqual(200);
});
    it("Should return that the user deleted", async () => {
          const res = await request(app)
          .delete("/")
          expect(res.status).toEqual(401);
});
    it("Should return that all users deleted", async () => {
          const res = await request(app)
          .delete("/delete")
          expect(res.status).toEqual(401);
});
//     it("Should return that the user updated successfully", async () => {
//           const res = await request(app)
//           .patch("/")
//           expect(res.status).toEqual(401);
// });
// });
// describe("blog testing", () =>{
//   it("Should create a blog and return success", async () => {
//          const res = await request(app)
//          .post("/create")
//          .send({
//           blogTitle:"diane",
//           blogDescription: "life story",
//           blogImage:"word.jpg",
//          })
//          expect(res.status).toEqual(400);
//        });
//       it("Should return that the blog found", async () => {
//              const res = await request(app)
//              .get("/")
//              expect(res.status).toEqual(200);
//   });
//       it("Should return that all blogs found", async () => {
//             const res = await request(app)
//             .get("/get")
//             expect(res.status).toEqual(200);
//   });
//       it("Should return that the user deleted", async () => {
//             const res = await request(app)
//             .delete("/")
//             expect(res.status).toEqual(401);
//   });
//       it("Should return that  all blog deleted", async () => {
//             const res = await request(app)
//             .delete("/delete")
//             expect(res.status).toEqual(401);
//   });
//       it("Should return that the blog updated successfully", async () => {
//             const res = await request(app)
//             .patch("/")
//             expect(res.status).toEqual(401);
//   });
  });