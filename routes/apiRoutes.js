const WorkoutDB = require("../models/workout");

module.exports = (app) => {

// Posts a workout
app.post("/api/workouts", ({ body }, res) => {
  WorkoutDB.create({ body })
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Gets the workouts
app.get("/api/workouts", (req, res) => {
  WorkoutDB.find({})
    // .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Gets workouts within a range of 7 days
app.get("/api/workouts/range", (req, res) => {
  WorkoutDB.find({}).limit(7)
  .then((workoutRange) => {
    res.json(workoutRange);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

// Finding and updating workouts by id
app.put("/api/workouts/:id", (req, res) => {
  // Taking in three arguments...
    // 1. request - rec.params and rec.body
    // 2. pushing rec.body to exercises
    // 3. requiring the response back to the front end to be the new information and ensuring all required validators are required
  WorkoutDB.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new:true, runValidators:true})
  .then((updateWorkout) => {
    res.json(updateWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});
};
