const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },

    workouts: [
        {
            // to title your workout
            name: {type: String, required: true},
            // was this a run, jog, walk, burnouts, core routine, weights, yoga?
            type: {type: String, required: true},
            // how long was the workout?
            time: {type: Number, required: true},
            // if this was a distance workout, how far?
            distance: {type: Number, required: false},
            // how many calories did you burn?
            calories: {type: Number, required: true},
            // how much weight was used if weights were involved?
            weight: {type: Number, required: false},
            // What types of exercises were involved if it was circuit training, interval running, etc?
            exercises: {type: String, required: false},
            // If this was weights, circuit training, interval runs, etc... how many sets did you do of the above exercises?
            sets: {type: Number, required: false},
            // If the above is true (exercises), how many reps did you do per set?
            reps: {type: Number, required: false},
        }
    ]
});
  
  const workout = mongoose.model("workout", WorkoutSchema);
  
  module.exports = workout;