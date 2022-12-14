const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const MongoClient = mongodb.MongoClient;
const MongoUtil = require("./MongoUtil");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

let app = express();
app.use(express.json);
app.use(cors());

async function main() {
  await MongoUtil.connect(MONGO_URI, "pandatea");

  const db = MongoUtil.getDB();

  app.get("/pandatea", async (req, res) => {
    console.log("connected to mongodb");
    let result = await db.collection("drinks").find().toArray();
    res.status(200);
    res.send(result);
  });
}

main();

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening to port 3000");
});
