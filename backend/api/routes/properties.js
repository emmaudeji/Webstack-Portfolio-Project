const router = require("express").Router();
const Property = require("../models/Property");
const verify = require("../verifyToken");

//GET ALL AGENTS
router.get("/agents", verify, async (req, res) => {}



//CREATE LIST BASED ON AGENT CATEGORY/AGENYT-ID
router.post("/agents/agent-id/{...}", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newProperty = new Property(req.body);

    try {
      const savedProperty = await newProperty.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!")
  }
});


//DELETE
//router.delete("/agents/agent-id/property-id",
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Property.findByIdAndDelete(req.params.id);
      res.status(201).json("The list has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!")
  }
});

//GET PROPERTY BASED ON AGENT ID
//router.get("/agents/agent-id/property",
router.get("/", verify, async (req, res) => {
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