// import mongoose from "mongoose";

// let isConnected = false; // boolean flag

// export async function connectDB(): Promise<void> {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string);
//     isConnected = true;
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//   }
// }




// import { MongoClient, MongoClientOptions } from "mongodb";

// const uri: string = process.env.MONGODB_URI || "";
// const options: MongoClientOptions = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!uri) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// declare global {
// //   Dev mode caching
// //   eslint-disable-next-line no-var
//   var _mongoClientPromise: Promise<MongoClient>;
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;



// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI!;
// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // Dev mode
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     (global as any)._mongoClientPromise = client.connect();
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   // Prod mode
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;





// import { MongoClient, MongoClientOptions } from "mongodb";

// const uri: string = process.env.MONGODB_URI!;
// const options: MongoClientOptions = {};

// declare global {
//   // গ্লোবাল ভেরিয়েবল _mongoClientPromise টাইপড করা
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // ডেভেলপমেন্ট মোডে
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // প্রোডাকশন মোডে
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
