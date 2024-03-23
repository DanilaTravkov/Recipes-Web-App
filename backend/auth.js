import jwt from 'jsonwebtoken'

const { SECRET_KEY } = process.env;

export function createToken(data) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}