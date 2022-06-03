module.exports = (req, res, next) => {
  let speed = "OFF";
  let errorCode = "OFF";
  let status = "OFF";

  res.render("index", {
    speed: speed,
    errorCode: errorCode,
    status: status,
  });
};
