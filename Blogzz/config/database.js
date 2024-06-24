
//We are using mongoose for connecting to the database. We are using the dotenv package to access the environment variables
//. We are connecting to the database using the DATABASE_URL environment variable.
// We are using the useNewUrlParser and useUnifiedTopology options to avoid deprecation warnings.
// We are using the then and catch methods to handle the promise returned by the connect method. 
//If the connection is successful, we log a message to the console.
// If there is an error in connecting to the database, 
//we log an error message to the console and exit the process with an exit code of 1. 

//We are exporting the dbconnect function so that we can use it in other files.


const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = () => {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
        console.error("DATABASE_URL is not defined in the environment variables");
        process.exit(1);
    }

    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database successfully");
        })
        .catch((error) => {
            console.log("Error in connecting to the database");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbconnect;
