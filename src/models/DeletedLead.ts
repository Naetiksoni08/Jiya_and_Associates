import mongoose, { Schema, Document } from "mongoose";

export interface IDeletedLead extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  source: string;
  tags: string[];
  deletedAt: Date;
  originalCreatedAt: Date;
}

const deletedLeadSchema = new Schema<IDeletedLead>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, default: "" },
  status: { type: String, default: "pending" },
  source: { type: String, default: "website" },
  tags: { type: [String], default: [] },
  deletedAt: { type: Date, default: Date.now },
  originalCreatedAt: { type: Date },
});

export const DeletedLead =
  mongoose.models.DeletedLead ||
  mongoose.model<IDeletedLead>("DeletedLead", deletedLeadSchema);
