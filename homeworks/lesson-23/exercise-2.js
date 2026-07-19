import jwt from "jsonwebtoken";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send('token missing');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        console.log(err.message);
        return res.status(401).send(err.message);
      }

      try {
        const membersData = await fs.readFile(path.join(__dirname, '../db/members.json'), 'utf-8');
        const members = JSON.parse(membersData);
        
        const member = members.find((m) => m.email === decoded.email);

        if (member && member.role === 'librarian') {
          next();
        } else {
          res.status(401).send('User not authorized');
        }
      } catch (fsError) {
        console.log(fsError.message);
        res.status(500).send('Internal server error');
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal server error');
  }
};
