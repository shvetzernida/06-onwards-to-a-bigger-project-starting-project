// POST /api/new-meetup

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { addMeetup } from '../../db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const meetup = req.body;
    const result = await addMeetup(meetup);
    console.log('result:', result);

    return res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
