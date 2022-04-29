const socket = require("../socket").getIO();


module.exports = (req, res, next) => {

    let speed = req.body.speed;
    let errorCode = req.body.errorCode;
    let status = req.body.status;

    socket.emit("update", {
        status: status,
        speed: speed,
        errorCode: errorCode
    })
    res.sendStatus(200);
};
