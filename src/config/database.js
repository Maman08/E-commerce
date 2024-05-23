// const mongoose = require("mongoose");
// require('dotenv').config();

// // Access the MongoDB URI from the environment variables
// const MONGODB_URL = process.env.MONGODB_URL;

// exports.connect = () => {
//     console.log("Connecting to the database...");
//     return mongoose.connect(MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log("Database connected successfully");
//     })
//     .catch((error) => {
//         console.error("Error in connecting to the database");
//         console.error(error);
//         process.exit(1); 
//     });
// };
