// Define required constants
const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

// Load environment variables
require("dotenv").config();
const PORT = process.env.PORT;

// Start the application on the defined port
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});
