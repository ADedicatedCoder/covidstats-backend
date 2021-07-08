// Import file containing all the information about the provinces and their health regions
const provinces = require("../data/locations.json");

// Get the name and code information from the imported file and return it in a JSON format
const map = (req, res) => {
    data = [];

    // Push the data into the array
    for (let i = 0; i < Object.values(provinces).length; i++) {
        data.push({
            name: Object.values(provinces)[i].name,
            code: Object.values(provinces)[i].code,
        });
    }

    // Return instructions on how to proceed and the data
    res.status(200).json({
        msg: "Success, proceed to /map/'code' where code is the 2-letter code",
        data: data,
    });
};

// Export the function for routes.js
module.exports = map;
