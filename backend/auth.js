import jwt from 'jsonwebtoken'

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export function generateAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: '30m'})
};

export function generateRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: '1d'})
};

export async function checkAccess(req, res, next) {
  console.log("Check access called");
  const authHeader = req.headers["authorization"]
  console.log(authHeader);
  if (!authHeader) return res.status(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        console.log("FUCKED UP TOKEN");
        return res.status(403);
      } // invalid token
      console.log("Token validation complete");
      req.user = decoded.username;
      next();
    }
  )

}