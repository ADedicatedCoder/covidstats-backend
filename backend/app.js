// Define required constants and initialize express app
const express = require("express");
const router = require("./routes/routes");
const app = express();

// Implement router and middleware
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
