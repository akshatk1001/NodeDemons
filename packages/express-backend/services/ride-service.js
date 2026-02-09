import mongoose from 'mongoose';
import userModel from '../models/user.js';
import rideModel from '../models/ride.js';

mongoose.set('debug', true);

// function to get rides going to that destination
// function getRides(destination, date) {
//   const promise = new Promise((req, res) => {
//     rideModel.find({ destination: destination, date: date }
//         .then((rides) => { res.send(rides) }
//             .catch((err) => { send(err) })
//         )
//     })
// }

// function to create a ride in the database
function createRide(ride) {
  const rideToAdd = new rideModel(ride);
  const promise = rideToAdd.save().catch((err) => console.log(err));
  return promise;
}
