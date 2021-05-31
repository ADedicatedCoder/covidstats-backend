const https = require("https");
versionData = "";

const getVersion = https.request("https://api.opencovid.ca/version", (res) => {
  res.on("data", (data) => {
    versionData = JSON.parse(data).version;
  });
});

getVersion.end();

const about = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "This is the /about endpoint. It displays the version of the API ",
    version: versionData,
    author: "Mahin S. Kukreja",
  });
};

module.exports = about;
