const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },

   exercises: [
        {
            // to title your workout
            name: {type: String, required: true},
            // was this a run, jog, walk, burnouts, core routine, weights, yoga?
            type: {type: String, required: true},
            // how long was the workout?
            duration: {type: Number, required: true},
            // if this was a distance workout, how far?
            distance: {type: Number},
            // how many calories did you burn?
            weight: {type: Number},
            // What types of exercises were involved if it was circuit training, interval running, etc?
            sets: {type: Number},
            // If the above is true (exercises), how many reps did you do per set?
            reps: {type: Number},
        }
    ]
});
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;