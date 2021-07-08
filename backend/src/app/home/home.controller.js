// Return a greeting with a status code of 200 and in JSON format
const home = (req, res) => {
    res.status(200).json({ msg: "This is the / endpoint, welcome!" });
};

// Export the function for routes.js
module.exports = home;
