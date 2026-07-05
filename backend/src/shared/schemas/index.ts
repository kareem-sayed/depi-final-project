import mongoose from 'mongoose';
import type { LangText } from '../types/index.js';

export const langTextSchema = new mongoose.Schema<LangText>(
  {
    ar: {
      type: String,
      required: true,
      trim: true,
    },
    en: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);
