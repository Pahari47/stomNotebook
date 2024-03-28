var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Pahariisagoodb$oy';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; // Assign decoded token data to req.user
        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
}

module.exports = fetchuser;
