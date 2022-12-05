const { MongoClient } = require("mongodb");
const express = require("express");
const wax = require("wax-on");
const hbs = require("hbs");
const { ObjectId } = require("mongodb");
const PORT = 3000;

const MongoUtil = require("./MongoUtil");

const app = express();

app.set("view engine", "hbs");
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

require("handlebars-helpers")({
  handlebars: hbs,
});

app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

async function main() {
  const url = process.env.MONGO_URI;
  const dbName = "pokemons";
  await MongoUtil.connect(url, dbName);
  console.log("connected to the db");

  app.get("/", function (req, res) {
    res.send("hello, world");
  });

  // read pokemon
  app.get("/all", async function (req, res) {
    let db = MongoUtil.getDB();
    let pokemonRecords = await db.collection("pokemon").find({}).toArray();
    res.render("all", {
      pokemonRecords: pokemonRecords,
    });
  });

  app.get("/pokemon-details", async function (req, res) {
    let db = MongoUtil.getDB();
    let pokemonRecords = await db.collection("pokemon").find({}).toArray();
    res.render("all", {
      pokemonRecords: pokemonRecords,
    });
  });

  // create pokemon
  app.get("/add", async function (req, res) {
    res.render("add");
  });

  app.post("/add", async function (req, res) {
    let { name, type } = req.body;

    console.log(`Pokemon record: ${name}, ${type}`);

    let db = MongoUtil.getDB();

    db.collection("pokemon").insertOne({
      name: name,
      type: type,
    });
    res.redirect("/all");
  });

  // update pokemon
  app.get("/update/:pokemon_id", async function (req, res) {
    let db = MongoUtil.getDB();
    let pokemonRecord = await db.collection("pokemon").findOne({
      _id: ObjectId(req.params.pokemon_id)
    });
    res.render("update", {
      pokemonRecord: pokemonRecord
    });
  })

  app.post("/update/:pokemon_id", async function (req, res) {
    let {name, type} = req.body;
    let db = MongoUtil.getDB();
    db.collection("pokemon").updateOne({
      _id: ObjectId(req.params.pokemon_id)
    },{
      $set: {
        name: name,
        type: type
      }
    });
    res.redirect("/all");
  })

  // delete pokemon
  app.post("/delete/pokemon_id", async function (req, res) {
    let db = MongoUtil.getDB();
    await db.collection('pokemon').deleteOne({
      _id: ObjectId(req.params.pokemon_id)
    })
    res.redirect("/all");
  })

  // create sub-doc
  app.get("/pokemon/:pokemon_id/add-note", async function (req, res) {
    let db = MongoUtil.getDB();
    let pokemonRecord = await db.collection("pokemon").create;
  });

  app.post("/pokemon/:pokemon_id/add-note", async function (req, res) {
    let newNote = {
      _id: ObjectId(),
      content: req.body.content,
    };

    db.collection("pokemon").updateOne(
      {
        _id: ObjectId(req.params.pokemon_id),
      },
      {
        $push: {
          notes: newNote,
        },
      }
    );
    res.redirect(`/pokemon/${req.params.pokemon_id}`);
  });

  // update sub-doc
  app.get(
    "/pokemon/:pokemon_id/update-note/:note_id",
    async function (req, res) {
      let db = MongoUtil.getDB();
      let noteId = req.params.note_id;
      let pokemonRecord = await db.collection("pokemon").findOne(
        {
          _id: ObjectId(req.params.pokemon_id),
        },
        {
          projection: {
            name: 1,
            notes: {
              $elemMatch: {
                _id: ObjectId(noteId),
              },
            },
          },
        }
      );
      res.render("update-note", {
        pokemonRecord: pokemonRecord,
      });
    }
  );

  app.post(
    "/pokemon?:pokemon_id/update-note/:note_id",
    async function (req, res) {
      let db = MongoUtil.getDB();
      let noteId = req.params.note_id;
      await db.collection("pokemon").updateOne(
        {
          _id: ObjectId(req.params.note_id),
          "notes._id": ObjectId(noteId),
        },
        {
          $set: {
            "notes.$.content": req.body.content,
          },
        }
      );
      res.redirect(`/pokemon/${req.params.pokemon_id}`);
    }
  );

  // delete sub doc
  app.get("/pokemon/pokemon_id/delete-note/note_id", async function (req, res) {
    let db = MongoUtil.getDB();
    let noteId = req.params.note_id;
    await db.collection("pokemon").updateOne(
      {
        _id: ObjectId(req.params.pokemon_id),
      },
      {
        $pull: {
          notes: {
            _id: ObjectId(noteId),
          },
        },
      }
    );

    res.redirect(`/pokemon/${req.params.pokemon_id}`);
  });
}

main();

app.listen(PORT, function () {
  console.log(`server is running at PORT ${PORT}`);
});
