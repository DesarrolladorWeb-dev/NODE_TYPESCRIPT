"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ES Module
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = express_1.default();
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
const PORT = 3000;
// _ para omitir
app.get("/ping", (_, res) => {
  console.log("someone pinged here !! ");
  res.send("pong");
});
app.use("/api/diaries", diaries_1.default);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
