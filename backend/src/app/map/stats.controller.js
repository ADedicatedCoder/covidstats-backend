const provinces = require("../data/locations.json");
const https = require("https");

const stats = (req, res) => {
    const province = req.params.province;
    const hrcode = req.params.hrcode;
    const url = `https://api.opencovid.ca/summary?loc=${hrcode}`;
    statistics = {};

    if (
        provinces[province.toString()] &&
        provinces[province.toString()].hrs[hrcode.toString()]
    ) {
        https.get(url, (apiRes) => {
            apiRes.on("data", (data) => {
                statistics = JSON.parse(data);
                formattedStats = {
                    cases: statistics.summary[0].cases,
                    deaths: statistics.summary[0].deaths,
                    cumulativeCases: statistics.summary[0].cumulative_cases,
                    cumulativeDeaths: statistics.summary[0].cumulative_deaths,
                    hr: statistics.summary[0].health_region,
                    province: statistics.summary[0].province,
                    date: statistics.summary[0].date,
                };
                return res.status(200).json({
                    msg: "Success",
                    stats: formattedStats,
                });
            });
        });
    } else {
        res.status(404).json({
            msg: `There is no province and health region with the codes: ${province}, ${hrcode} respectively. Refer back to /map to see all the codes.`,
        });
    }
};

module.exports = stats;
