import mongoose from "mongoose";
import { langTextSchema } from "../../shared/schemas/index.js";
import type { LangText } from "../../shared/types/index.js";

export interface IProphet {
  slug: string;
  name: LangText;
  shortDesc: LangText;
  longDesc: LangText;
  order: number;
  ululAzm: boolean;
}

const prophetSchema = new mongoose.Schema<IProphet>(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    name: {
      type: langTextSchema,
      required: [true, "Name is required"],
    },
    shortDesc: {
      type: langTextSchema,
      required: [true, "Short description is required"],
    },
    longDesc: {
      type: langTextSchema,
      required: [true, "Long description is required"],
    },
    order: {
      type: Number,
      required: [true, "Order is required"],
      min: 1,
      unique: true,
    },
    ululAzm: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Prophet = mongoose.model<IProphet>("Prophet", prophetSchema);

export default Prophet;
