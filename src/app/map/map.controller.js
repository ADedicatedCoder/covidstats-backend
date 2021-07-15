// Import file containing all the information about the countries
const countries = require("../data/countries.json");

// Get the name and code information from the imported file and return it in a JSON format
const map = (req, res) => {
    data = [];

    // Push the data into the array
    for (let i = 0; i < Object.values(countries["features"]).length; i++) {
        data.push({
            country: {
                code: countries["features"][i]["properties"]["ISO_A3"],
                name: countries["features"][i]["properties"]["ADMIN"],
            },
        });
    }

    // Return instructions on how to proceed and the data
    res.status(200).json({
        msg: "Success, proceed to /map/'code' where code is the ISO_A3 Code of your country",
        data: data,
    });
};

// Export the function for routes.js
module.exports = map;
