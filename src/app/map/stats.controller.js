// Import file containing all the information about the countries and HTTPS module to make requests
const codes = require("../data/codes.json");
const https = require("https");

// Check if the country or ISO3 code are valid and return statistics for the country in a JSON format
const stats = (req, res) => {
    // Variables to hold request URL parameters
    const country = req.params.country;

    // If the country ISO3 code is valid, set the URL, send the request and return the data
    if (codes[country.toString()]) {
        let url = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
        https.get(url, (apiRes) => {
            let result = "";
            apiRes.on("data", (data) => {
                // Combine all chunks of the request
                result += data;
            });
            apiRes.on("end", () => {
                // Parse all chunks of the result
                let statistics = JSON.parse(result);
                // Format result to show only crucial information
                let formattedStats = {
                    cases: statistics["cases"],
                    deaths: statistics["deaths"],
                    cured: statistics["recovered"],
                    population: statistics["population"],
                };
                // Return the stats with a status code of 200 in a JSON format
                return res.status(200).json({
                    msg: "Success",
                    stats: formattedStats,
                });
            });
        });
    }
    // Return an error message that the code was not found.
    else {
        return res.status(404).json({
            msg: `Failure, ISO code: ${country} is not a valid ISO code`,
        });
    }
};

// Export the function for routes.js
module.exports = stats;
