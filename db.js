const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_MAIN_TABLE}.0fuxa08.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMeetupsCollection() {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  const db = client.db(process.env.MONGODB_MAIN_TABLE);
  const meetupsCollection = db.collection("meetups");
  return meetupsCollection;
}

export async function addMeetup(meetup) {
  try {
    const meetupsCollection = await connectToMeetupsCollection();
    const response = await meetupsCollection.insertOne(meetup);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function getAllMeetups() {
  try {
    const meetupsCollection = await connectToMeetupsCollection();
    const meetups = await meetupsCollection.find().toArray();
    return meetups;
  } catch (error) {
    console.log("getAllMeetups:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
