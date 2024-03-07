import { MongoClient } from "mongodb";

async function FetchHandler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const Client = await MongoClient.connect(
      "mongodb+srv://vaibhavdhamanage12:3zI0rEai6QuMopaZ@cluster0.t5bx9cq.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = Client.db();
    const mettupcollection = db.collection("Meetups");
    const result = await mettupcollection.insertOne(data);
    console.log(result);
    Client.close();

    res.status(201).json({ message: "SuccessFull" });
  }
}
export default FetchHandler;
