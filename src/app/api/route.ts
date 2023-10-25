// pages/api/liste.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Example of a list with fictional data
const sampleData = [
  { id: 1, name: 'Element 1' },
  { id: 2, name: 'Element 2' },
  { id: 3, name: 'Element 3' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Logic for handling GET request
    res.status(200).json(sampleData);
  } else if (req.method === 'POST') {
    // Logic for handling POST request
    const { newData } = req.body;
    // Do something with newData, such as adding it to sampleData
    sampleData.push({ id: sampleData.length + 1, name: newData });
    res.status(200).json({ message: 'Data sent successfully' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}
