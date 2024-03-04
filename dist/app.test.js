"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
// describe("api endPoint",()=>{
// let token : string;
// let brandId : number;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect("mongodb+srv://gedeonprogrammer:programmer12@cluster0.8sikbdc.mongodb.net/Andela-poltifolio");
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
describe("App testing", () => {
    it("Should return success", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default).get("/");
        expect(res.status).toEqual(200);
    }));
});
describe("user testing", () => {
    it("Should create a user and return success", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/create")
            .send({
            firstname: "TWAGIRA",
            lastname: "Goodu",
            email: "twagira@gmail.com",
            phone: "250733117441",
            password: "Diane@123",
            confrimpassword: "Diane@123"
        });
        expect(res.status).toEqual(201);
    }));
    it("Should return that the user successfully logged in", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/login")
            .send({
            email: "geden@gmail.com",
            password: "Gedeon@12",
        });
        expect(res.status).toEqual(201);
    }));
    it("Should return that the user found", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .get("/");
        expect(res.status).toEqual(200);
    }));
    it("Should return that all users found", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .get("/");
        expect(res.status).toEqual(200);
    }));
    it("Should return that the user deleted", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .delete("/");
        expect(res.status).toEqual(401);
    }));
    it("Should return that all users deleted", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .delete("/delete");
        expect(res.status).toEqual(401);
    }));
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
