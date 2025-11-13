import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function requireAuth(requiredRoles = []) {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith('Bearer '))
                return res.status(401).json({ message: 'Missing or invalid authorization header' });

            const token = authHeader.split(' ')[1];
            const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

            // payload should carry sub/id and role according to contract — adapt si usas otro claim
            const userId = payload.sub || payload.id || payload.userID || payload.sub;
            const role = payload.role || payload.rol;

            if (!userId) return res.status(401).json({ message: 'Invalid token payload: missing user ID' });

            // role checks if roles required
            if (Array.isArray(requiredRoles) && requiredRoles.length > 0 && !requiredRoles.includes(role)) {
                return res.status(403).json({ message: 'Insufficient permissions' });
            }

            req.user = { id: userId, role };
            next();
        } catch (err) {
            console.error('Auth middleware error:', err);
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
}