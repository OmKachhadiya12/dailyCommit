import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
const app = express();

app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));

app.use(cors());

const PORT = process.env.PORT || 2005;

connectDB().then( () => {
    app.listen(PORT , () => {
        console.log("App is listining");
    })
}).catch( (error) => {
    console.log("Error", error);
});