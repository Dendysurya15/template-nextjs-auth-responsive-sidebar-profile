// app/api/auth/error.ts
import { NextApiResponse } from "next";

export default function handler(req: any, res: NextApiResponse) {
  res.status(404).json({ error: "Not Found" });
}
