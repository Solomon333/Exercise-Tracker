const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app =express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
      mongoose.connect(url, connectionParams)
        .then( () => {
            console.log("Connected to the database")
        } )
        .catch( (err) => {
            console.error(`Error connecting to the database: ${err}`);
        })
 

        
        const exercisesRouter = require("./routes/exercises");
        const usersRouter = require("./routes/users");

        app.use('/exercises', exercisesRouter);
        app.use('/users', usersRouter);










app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})