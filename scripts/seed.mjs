import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../.env.local") });

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  status: { type: String, default: "pending" },
  notes: Array,
  tags: { type: [String], default: [] },
  starred: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

const seeds = [
  {
    name: "Priya Mehta",
    email: "priya.mehta@gmail.com",
    phone: "9876501234",
    message: "I need help with a property dispute. My neighbour has encroached on my land and we have been unable to resolve it amicably. Looking for legal guidance.",
    status: "pending",
    tags: ["Property"],
    starred: true,
    createdAt: new Date("2026-03-20"),
  },
  {
    name: "Arjun Kapoor",
    email: "arjun.kapoor@outlook.com",
    phone: "9123456780",
    message: "We are a startup and need legal advice on company incorporation, shareholder agreements, and compliance requirements under Companies Act.",
    status: "contacted",
    tags: ["Corporate"],
    starred: false,
    createdAt: new Date("2026-03-22"),
  },
  {
    name: "Sunita Verma",
    email: "sunita.v@yahoo.com",
    phone: "9988776655",
    message: "My husband and I are seeking a mutual consent divorce. We need an advocate to handle the paperwork and court proceedings.",
    status: "contacted",
    tags: ["Family"],
    starred: true,
    createdAt: new Date("2026-03-23"),
  },
  {
    name: "Rajesh Gupta",
    email: "rajesh.gupta@business.in",
    phone: "9870012345",
    message: "Our firm received a GST notice for FY 2023-24 alleging short payment of tax. We need urgent representation before the GST authorities.",
    status: "pending",
    tags: ["GST"],
    starred: false,
    createdAt: new Date("2026-03-24"),
  },
  {
    name: "Ananya Singh",
    email: "ananya.singh@gmail.com",
    phone: "9654321098",
    message: "I have been falsely accused in a criminal case and need immediate legal assistance. The matter is listed before the Sessions Court next week.",
    status: "closed",
    tags: ["Criminal"],
    starred: false,
    createdAt: new Date("2026-03-15"),
  },
  {
    name: "Vikram Sharma",
    email: "vikram.sharma@hotmail.com",
    phone: "9012345678",
    message: "I want to file a case against my employer for wrongful termination and non-payment of dues. Worked there for 6 years.",
    status: "pending",
    tags: ["Litigation"],
    starred: false,
    createdAt: new Date("2026-03-25"),
  },
  {
    name: "Deepa Nair",
    email: "deepa.nair@gmail.com",
    phone: "9871234560",
    message: "Looking for advice on drafting a will and setting up a family trust for our assets. We have properties in Delhi and Kochi.",
    status: "closed",
    tags: ["Property", "Family"],
    starred: true,
    createdAt: new Date("2026-03-10"),
  },
  {
    name: "Mohammed Farhan",
    email: "farhan.m@spambot.xyz",
    phone: "0000000000",
    message: "URGENT LEGAL HELP!!! Click here to get FREE consultation. Limited offer!!!",
    status: "spam",
    tags: [],
    starred: false,
    createdAt: new Date("2026-03-26"),
  },
  {
    name: "Kavya Reddy",
    email: "kavya.reddy@techcorp.com",
    phone: "9900112233",
    message: "Our technology company is expanding and we need help with drafting vendor contracts, NDAs, and employment agreements.",
    status: "contacted",
    tags: ["Corporate"],
    starred: false,
    createdAt: new Date("2026-03-26"),
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@gmail.com",
    phone: "9823456701",
    message: "I received a legal notice from my business partner alleging breach of partnership deed. Need to understand my rights and how to respond.",
    status: "pending",
    tags: ["Corporate", "Litigation"],
    starred: false,
    createdAt: new Date("2026-03-27"),
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const result = await Lead.insertMany(seeds);
    console.log(`✓ Inserted ${result.length} seed leads`);

    await mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
