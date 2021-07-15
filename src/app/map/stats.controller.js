// Import file containing all the information about the provinces and their health regions and HTTPS module to make requests
const provinces = require("../data/locations.json");
const https = require("https");

// Check if the province and hrcode are valid and return statistics for the hr in a JSON format
const stats = (req, res) => {
    // Variables to hold request URL parameters
    const country = req.params.country;

    // The URL which statistics will be requested from
    const url = `https://disease.sh/v3/covid-19/countries/Canada?strict=true`;

    https.get(url, (apiRes) => {
        let result = "";
        apiRes.on("data", (data) => {
            // Parse and format data
            result += data;
        });
        // Return the stats with a status code of 200 in a JSON format
        apiRes.on("end", () => {
            let statistics = JSON.parse(result);
            return res.status(200).json({
                msg: "Success",
                stats: statistics,
            });
        });
    });
};

// Export the function for routes.js
module.exports = stats;
