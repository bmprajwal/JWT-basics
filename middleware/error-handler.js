const { CustomErrorAPI } = require('../errors/all-errors')
const StatusCodes = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomErrorAPI) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong. Try again!!')
}

module.exports = errorHandlerMiddleware