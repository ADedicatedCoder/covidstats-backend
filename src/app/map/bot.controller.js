const toISO3 = require("../data/countryToISO.json");
const toCountry = require("../data/codes.json");
const iso2ToCountry = require("../data/iso2ToCountry.json");
const https = require("https");

const ifCountry = (database, country) => {
    insertIntoURL = database[country.toString()];
    console.log(database[country.toString()]);
    const url = `https://disease.sh/v3/covid-19/countries/${insertIntoURL}?strict=true`;
    return url;
};

const bot = (req, res) => {
    const country = req.body.country;
    let covidUrl = ``;
    if (toISO3[country.toString()]) {
        covidUrl = ifCountry(toISO3, country);
    } else if (toCountry[country.toString()]) {
        covidUrl = ifCountry(toCountry, country);
    } else if (iso2ToCountry[country.toString()]) {
        covidUrl = ifCountry(iso2ToCountry, country);
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
