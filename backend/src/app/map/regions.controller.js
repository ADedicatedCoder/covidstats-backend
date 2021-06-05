const provinces = require("../data/locations.json");

const regions = (req, res) => {
    data = [];
    province = req.params.province;
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
        return res.status(200).json({
            msg: "Success",
            info: data,
        });
    }
    res.status(404).json({
        msg: "Failure",
    });
};

module.exports = regions;
