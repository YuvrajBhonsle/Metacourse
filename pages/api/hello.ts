// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(403).json({ message: "Method Not allowed" });
  }
  try {
    const { id } = req.body;
    res.status(200).json({ name: `${id}-from metacourse api` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
