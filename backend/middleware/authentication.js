const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader || !authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Please login to access this route' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden or token has expired' })
            req.user = decoded.UserInfo.username
            req.roles = decoded.UserInfo.roles
            next()
        }
    )

    if (!token) {
        return res.status(401).json({ message: 'No token' })
    }
}

module.exports = authenticate 