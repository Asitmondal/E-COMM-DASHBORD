const mongoose = require('mongoose');
// const mongoUrl =
//   "mongodb+srv://ExploreSphere:Y3AD6QKznBJ7JJDp@exploresphere.tv5f9g9.mongodb.net/?retryWrites=true&w=majority";
// const dbConnect = () => {
//     if (mongoose.Connection.readystate >= 1) {
//         console.log("alredy dbconnect");
//         return;
//     }
    
//     mongoose.connect(mongoUrl, {
//       dbName: "e-commerce",
//     });

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "Connection error:"));
//     };
// module.exports = dbConnect;

mongoose.connect("mongodb://localhost:27017/e-commerce");