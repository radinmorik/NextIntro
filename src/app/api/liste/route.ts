// pages/api/data.js

// Eksempel på en liste med fiktive data
const sampleData = [
  { id: 1, name: 'Element 1' },
  { id: 2, name: 'Element 2' },
  { id: 3, name: 'Element 3' }
];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // Hent data logikk
    res.status(200).json(sampleData);
  } else if (req.method === 'POST') {
    // Send data logikk
    const { newData } = req.body;
    // Gjør noe med newData, for eksempel legge den til sampleData
    sampleData.push({ id: sampleData.length + 1, name: newData });
    res.status(200).json({ message: 'Data sent successfully' });
  } else {
    res.status(405).end(); // Metoden ikke tillatt
  }
}
