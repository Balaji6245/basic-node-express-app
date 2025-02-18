const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Info",
        data: {},
        error: {}
    });
}

module.exports = {
    info
}