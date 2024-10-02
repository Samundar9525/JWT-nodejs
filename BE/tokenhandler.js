const jwt = require('jsonwebtoken');
const JWT_SECRET = 'balbasaur';

// function jo jwt token create karega
const generateToken = (userData) => {
    const payload = {
        id:userData?.id,
        email: userData?.email,
        role: userData?.role
    }

    return jwt.sign(payload,JWT_SECRET,{expiresIn: '1h' })
}

//function jo jwt ko verify karega
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract Bearer token

    if (!token) {
        return res.status(401).json({ error: 'Access denied, token missing!' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verifying the token
        req.user = decoded; // Attach decoded token data to the request object
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};



module.exports = {
    generateToken,
    authenticateJWT
};
