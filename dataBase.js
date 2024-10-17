const { MongoClient } = require("mongodb");

//connection Url
const uri =
  "mongodb+srv://admin:BPsp30Two8COZAP7@cluster0.qfixi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

//db name
const databaseName = "HelloWorld";

async function main() {
  //using connect method to connect to mongodb server
  await client.connect();
  console.log("connect successfully");
  const db = client.db(databaseName);
  const collection = db.collection("user");

  //document insert

  // const data = {
  //   firstName: "deepika",
  //   lastName: "padukone",
  //   location: "Delhi",
  // };

  // const data2 = {
  //   firstName: "ranveer",
  //   lastName: "singh",
  //   location: "mumbai",
  // };

  // const insertDoc = await collection.insertOne(data2);

  // console.log("insert document => ", insertDoc);
  // const insertDocs = await collection.insertMany([data]);
  // console.log("insert documents => ", insertDocs);

  //document delete

  const deleteDoc = await collection.deleteMany({ firstName: "deepika" });

  console.log("Deleted documents => ", deleteDoc);

  //document read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //update document

  const updateDoc = await collection.updateOne(
    { firstname: "abhishek" },
    {
      $set: { location: "delhi" },
    },
  );

  console.log("update doc of abhishek => ", updateDoc);

  //count documents

  const result = await collection.countDocuments({});
  console.log("count of collection in documents is ", result);

  //find all documents with filter

  const find = await collection.find({ firstName: "deepika" }).toArray();

  console.log("document with deepika => ", find);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
