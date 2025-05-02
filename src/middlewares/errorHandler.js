
export default function errorHandler(err, req, res, next)  {
    res
        .status(401)
        .json({
            error: err.message
        })
}