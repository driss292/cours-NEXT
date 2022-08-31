import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ data: 5 });
    }
}
