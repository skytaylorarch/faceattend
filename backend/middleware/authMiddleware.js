const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ message: 'No token provided' });

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ message: 'User not found' });

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized', error });
    }
  };
};

module.exports = authMiddleware;
