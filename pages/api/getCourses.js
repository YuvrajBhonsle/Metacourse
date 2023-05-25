import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(403).json('[Error]:Method not allowed');
    return;
  }
  try {
    const { sem, branch } = req.body;
    console.log('Sem', sem);
    console.log('Branch', branch);
    const client = await clientPromise;
    const db = client.db('MetaCourse');
    let courses = await db.collection(branch).find({ 'data.sem': sem }).toArray();
    console.log(courses);
    res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
  // res.json(myPost.ops[0]);
}