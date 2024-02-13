// POST /api/new-meetup
import { addMeetup } from "../../db";

async function handler(req, res) {
  if (req.method === "POST") {
    const meetup = req.body;
    const result = await addMeetup(meetup);
    console.log("result in api/new-meetup:", result);

    return res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
