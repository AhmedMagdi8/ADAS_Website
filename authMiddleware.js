const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {

    const authHeader = req.headers.authorization;
    
    try {
        if(authHeader) {
            const decodedToken = authHeader.split(' ')[1]
            jwt.verify(decodedToken, String(process.env.TOKEN_SECRET))
        } else {
            throw new Error('not authenticated');
        }
        next();
    } catch (err) {
        res.status(401)
        res.json('Access denied, invalid token')
    }
}