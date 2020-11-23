const router = require("express").Router();
const WorkoutDB = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  WorkoutDB.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  WorkoutDB.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  WorkoutDB.find({}).limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  // Finding and updating workouts by id...
  // Taking in three arguments...
  // 1. request - rec.params and rec.body
  // 2. pushing rec.body to exercises
  // 3. requiring the response back to the front end to be the new information and ensuring all required validators are required
  WorkoutDB.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new:true, runValidators:true})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});



module.exports = router;