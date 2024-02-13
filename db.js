const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://humanidis:<password>@cluster0.44bxjxh.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function addMeetup(meetup, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    client.db('meetups').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );

    const meetupsCollection = client.db.collection(process.env.MAIN_TABLE);
    const result = await meetupsCollection.insertOne(meetup);
    return result;
  } catch (error) {
    console.dir(error);
  } finally {
    await client.close();
    // Ensures that the client will close when you finish/error
  }
}
