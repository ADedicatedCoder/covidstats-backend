// // Import HTTPS module to make requests
// const https = require("https");
// versionData = "";

// // Send a request to get the version of the API
// const getVersion = https.request("https://api.opencovid.ca/version", (res) => {
//     // Get the data and parse it
//     res.on("data", (data) => {
//         versionData = JSON.parse(data).version;
//     });
// });

// getVersion.end();

// // Return the information with a status code of 200 and in a JSON format
// const about = (req, res) => {
//     res.status(200).json({
//         msg: "Success",
//         version: versionData,
//     });
// };

// // Export the function for routes.js
// module.exports = about;
