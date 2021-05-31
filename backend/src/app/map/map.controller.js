const map = (req, res) => {
  res.status(200).json({ success: true, msg: "This is the /map endpoint" });
};

module.exports = map;
