const about = (req, res) => {
  res.status(200).json({ success: true, msg: "This is the /about endpoint" });
};

module.exports = about;
