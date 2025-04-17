import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token required" });

  try {
    const user = jwt.verify(token, 'secret_key');
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
