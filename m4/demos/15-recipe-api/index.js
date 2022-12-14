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

// routing for api
async function main() {
  await MongoUtil.connect(MONGO_URI, "pokemons");

  const db = MongoUtil.getDB();

  app.get("/pokemon", async (req, res) => {
    let pokemon = await db.collection("pokemon").find().toArray();
    res.status(200);
    res.send(pokemon);
  });

  app.post("/pokemon", async (req, res) => {
    const results = await db.collection("pokemon").insertOne({
      title: req.body.title,
      ingredients: req.body.ingredients,
    });
    res.status(200);
    res.send(results);
  });
}

main();

app.listen(8888, () => {
  console.log("server is connected to port 8888");
});
