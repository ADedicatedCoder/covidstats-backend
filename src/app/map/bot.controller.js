const toISO = require("../data/countryToISO.json");
const toCountry = require("../data/codes.json");
const https = require("https");

const ifCountry = (database, country, res) => {
    insertIntoURL = database[country.toString()];
    console.log(database[country.toString()]);
    const url = `https://disease.sh/v3/covid-19/countries/${insertIntoURL}?strict=true`;
    return url;
};

const bot = (req, res) => {
    const country = req.body.country;
    let covidUrl = ``;
    console.log(country);
    if (toISO[req.body.country.toString()]) {
        covidUrl = ifCountry(toISO, country, res);
    } else if (toCountry[req.body.country.toString()]) {
        covidUrl = ifCountry(toCountry, country, res);
    } else {
        return res.status(404).json({
            msg: "Country not found",
        });
    }

    https.get(covidUrl, (apiRes) => {
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
                flag: statistics["countryInfo"]["flag"],
                country: statistics["country"],
                updated: statistics["updated"],
                cases: statistics["cases"],
                deaths: statistics["deaths"],
                cured: statistics["recovered"],
            };
            // Return the stats with a status code of 200 in a JSON format
            return res.status(200).json({
                stats: formattedStats,
            });
        });
    });
};

module.exports = bot;
