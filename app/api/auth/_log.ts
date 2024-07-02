// app/api/auth/_log.ts
import { NextApiResponse } from "next";

export default function handler(req: any, res: NextApiResponse) {
  // Implement custom logging logic
  res.status(404).json({ error: "Not Found" });
}
