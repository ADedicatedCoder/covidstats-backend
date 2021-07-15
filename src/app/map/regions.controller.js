// Import file containing all the information about the provinces and their health regions
const provinces = require("../data/locations.json");

// Check if province code is valid and then return information in JSON format
const regions = (req, res) => {
    data = [];

    // Get the province parameter from the request URL
    province = req.params.province;

    // If the province is valid, push the data about the health regions in to the data array
    if (provinces[province.toString()]) {
        for (
            let i = 0;
            i < Object.keys(provinces[province.toString()].hrs).length;
            i++
        ) {
            data.push({
                hr: Object.keys(provinces[province.toString()].hrs)[i],
                hrcode: Object.values(provinces[province.toString()].hrs)[i],
            });
        }

        // Return instructions on how to proceed and the data
        return res.status(200).json({
            msg: "Success, proceed to /map/'code'/'hrcode', where code is the 2-letter code and hrcode is the numeric code",
            info: data,
        });
        // Return an error message wit the code 404 since the input was not found
    } else {
        res.status(404).json({
            msg: "Failure",
        });
    }
};

// Export the function for routes.js
module.exports = regions;
