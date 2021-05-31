const home = (req, res) => {
  res.status(200).json({ success: true, msg: "This is the / endpoint" });
};

module.exports = home;
