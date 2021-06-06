// Import file containing all the information about the provinces and their health regions and HTTPS module to make requests
const provinces = require("../data/locations.json");
const https = require("https");

// Check if the province and hrcode are valid and return statistics for the hr in a JSON format
const stats = (req, res) => {
    // Variables to hold request URL parameters
    const province = req.params.province;
    const hrcode = req.params.hrcode;

    // The URL which statistics will be requested from
    const url = `https://api.opencovid.ca/summary?loc=${hrcode}`;

    // If the province and hrcode are valid, send the HTTPS request and return the information
    if (
        provinces[province.toString()] &&
        provinces[province.toString()].hrs[hrcode.toString()]
    ) {
        // Send the HTTPS request
        https.get(url, (apiRes) => {
            apiRes.on("data", (data) => {
                // Parse and format data
                let statistics = JSON.parse(data);
                let formattedStats = {
                    cases: statistics.summary[0].cases,
                    deaths: statistics.summary[0].deaths,
                    cumulativeCases: statistics.summary[0].cumulative_cases,
                    cumulativeDeaths: statistics.summary[0].cumulative_deaths,
                    hr: statistics.summary[0].health_region,
                    province: statistics.summary[0].province,
                    date: statistics.summary[0].date,
                };

                // Return the stats with a status code of 200 in a JSON format
                return res.status(200).json({
                    msg: "Success",
                    stats: formattedStats,
                });
            });
        });
        // If either condition fails, return the error message
    } else {
        res.status(404).json({
            msg: `There is no province and health region with the codes: ${province}, ${hrcode} respectively. Refer back to /map to see all the codes.`,
        });
    }
};

// Export the function for routes.js
module.exports = stats;
