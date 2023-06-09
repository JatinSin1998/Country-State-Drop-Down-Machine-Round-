import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import Router from "./routes/router.js";

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


/** api routes */
app.use("/",Router)

// Server ///
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
