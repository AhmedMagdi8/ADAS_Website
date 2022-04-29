module.exports = (req, res, next) => {
  let speed = 150;
  let errorCode = 100;
  let status = 100;

  res.render("index", {
    speed: speed,
    errorCode: errorCode,
    status: status,
  });
};
