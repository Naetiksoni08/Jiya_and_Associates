import mongoose, { Schema, Document } from "mongoose";

export interface INote {
  content: string;
  createdAt: Date;
}

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  nature?: string;
  message: string;
  status: "pending" | "contacted" | "closed" | "spam";
  source: "website" | "whatsapp" | "email" | "phone" | "referral";
  notes: INote[];
  tags: string[];
  starred: boolean;
  createdAt: Date;
}

const noteSchema = new Schema<INote>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const leadSchema = new Schema<ILead>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  nature: { type: String, trim: true },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "contacted", "closed", "spam"],
    default: "pending",
  },
  source: {
    type: String,
    enum: ["website", "whatsapp", "email", "phone", "referral"],
    default: "website",
  },
  notes: [noteSchema],
  tags: { type: [String], default: [] },
  starred: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Guard: prevents "Cannot overwrite model" error during hot reloads
export const Lead =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", leadSchema);
