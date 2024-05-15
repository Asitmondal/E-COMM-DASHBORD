// const mongoose = require('mongoose');
// const mongoUrl="mongodb+srv://ExploreSphere:XsxolezWkYkIGYoa@exploresphere.tv5f9g9.mongodb.net/?retryWrites=true&w=majority"
// //mongodb+srv://ExploreSphere:XsxolezWkYkIGYoa@exploresphere.tv5f9g9.mongodb.net/test?ssl=true&replicaSet=mflix-shard-0&authSource=admin&retryWrites=true&w=majority";
// mongoose.connect(mongoUrl,{
//     dbName:"E-comm"
// }).then(()=>{
//     console.log("Database Connected")
// }).catch((error)=>{
//     console.warn(error)
// })/

const mongoose = require('mongoose');

// Replace <YOUR_MONGODB_IP> with the actual IP address of your MongoDB server
//const mongoUrl = "mongodb+srv://ExploreSphere:XsxolezWkYkIGYoa@exploresphere.tv5f9g9.mongodb.net/?retryWrites=true&w=majority";
/*mongoose.connect(mongoUrl, {
    dbName: "E-comm"
}).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(mongoUrl);
    console.error("Error connecting to database:", error);
});*/
/*const dbConnect = () => {
    if (mongoose.Connection.readystate >= 1) {
        console.log("alredy dbconnect");
        return;
    }
    
    mongoose.connect(mongoUrl, {
        dbName: "Ecomm",
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", () => {
        console.log("Connected to MongoDB");
        
    });
*/
//export default dbConnect;
mongoose.connect("mongodb://localhost:27017/e-commerce");