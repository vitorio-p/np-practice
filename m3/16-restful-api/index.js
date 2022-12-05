const express = require("express");
const cors = require("cors");

require("dotenv").config();

const MongoUtil = require("./MongoUtil"); // ./ means relative path
const { ObjectId } = require("mongodb");
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// previously using app.use(express.urlencoded({extended: false}))
app.use(express.json());

// enable cross origin resource sharing (cors)
app.use(cors());

async function main() {
  await MongoUtil.connect(MONGO_URI, "foodDB");

  app.get("/", function (req, res) {
    res.send("hello world");
  });

  app.post("/food-sightings", async function (req, res) {
    let description = req.body.description;
    let name = req.body.name;

    let datetime = new Date(req.body.datetime) || new Date(); // if req.body.datetime is valid, assign value to variable datetime. else, assign new datetime

    let foodSightings = {
      description: description,
      name: name,
      datetime: datetime,
    };

    const db = MongoUtil.getDB();

    const result = await db
      .collection("foodCollection")
      .insertOne(foodSightings);

    res.status(200);
    res.send(result);
  });

  app.get("/food-sightings", async function (req, res) {
    let criteria = {};
    const db = MongoUtil.getDB();
    console.log(req.query);

    if (req.query.description) {
      criteria.description = req.query.description;
      criteria.description = {
        $regex: req.query.description, // use regex search
        $options: "i", // ignore case (upper/lower case)
      };
    }

    if (req.query.food) {
      criteria.food = {
        $in: [req.query.food],
      };
    }
  });

  app.put("/food-sightings/:sightings_id", async function (req, res) {
    try {
      let { description, food } = req.body;
      let datetime = new Date(req.body.datetime) || new Date();

      let modifiedDocument = {
        description,
        food,
        datetime,
      };

      const result = await MongoUtil.getDB()
        .collection("sightings")
        .updateOne({
          id: ObjectId(req.params.sightings_id),
        });
      res.status(200);
      res.send("msg: data updated successfully");
    } catch (error) {
      res.status(500);
    }
  });

  app.delete("/food-sightings/:sightings_id", async function (req, res) {
    try {
      await MongoUtil.getDB()
        .collection("sightings")
        .deleteOne({
          _id: ObjectId(req.params.sightings_id),
        });
      res.status(200);
      res.send("msg: data deleted successfully");
    } catch (error) {
      res.status(500);
    }
  });
};

main();

app.listen(3000, function () {
  console.log("server is listening at port: 3000");
});
