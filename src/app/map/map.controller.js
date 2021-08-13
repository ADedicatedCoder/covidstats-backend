// Import file containing all the information about the countries
const countries = require("../data/codes.json");

// Get the name and code information from the imported file and return it in a JSON format
const map = (req, res) => {
    data = [];

    // Push the data into the array
    for (let i = 0; i < Object.keys(countries).length; i++) {
        data.push({
            country: {
                name: Object.values(countries)[i],
                ISOcode: Object.keys(countries)[i],
            },
        });
    }

    // Return instructions on how to proceed and the data
    res.status(200).json({
        msg: "Success, proceed to /map/'code' where code is the ISO Code of your country",
        data: data,
    });
};

// Export the function for routes.js
module.exports = map;
