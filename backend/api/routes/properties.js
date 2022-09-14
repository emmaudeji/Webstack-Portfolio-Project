const router = require("express").Router();
const Property = require("../models/Property");
const verify = require("../verifyToken");

//CREATE LIST OF PROPERTY AS PER AGENT
router.post("/users/:id/property", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newProperty = new Property(req.body);

    try {
      const savedProperty = await newProperty.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE PROPERTY AS PER AGENT
router.delete("users/:id/property", verify, async (req, res) => {
  if (req.users.isAdmin) {
    try {
      await Property.findByIdAndDelete(req.params.id);
      res.status(201).json("The list has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET PROPERTY AS PER AGENT
router.get("/users/:id/property", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  //const narationQuery = req.query.narration;
  let property = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        property = await Property.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        property = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      property = await Property.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
