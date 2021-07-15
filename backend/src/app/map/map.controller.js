// Import file containing all the information about the provinces and their health regions
const provinces = require("../data/locations.json");
const countries = require("../data/countries.json");

// Get the name and code information from the imported file and return it in a JSON format
const map = (req, res) => {
    data = [];

    // Push the data into the array
    for (let i = 0; i < Object.values(countries["features"]).length; i++) {
        // data.push({
        //     name: Object.values(provinces)[i].name,
        //     code: Object.values(provinces)[i].code,
        // });
        data.push({
            country: countries["features"][i]["properties"],
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
