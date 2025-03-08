const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    // Check for the token in the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user data to the request object
        req.user = decoded;

        // Proceed to the next middleware or controller
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateJWT;
