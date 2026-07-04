import { Schema, model, Document, Types } from 'mongoose';

export interface IBookmark extends Document {
  userId: Types.ObjectId;
  storyId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const bookmarkSchema = new Schema<IBookmark>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    storyId: {
      type: Schema.Types.ObjectId,
      ref: 'Story',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Prevent duplicate bookmarks for the same user + story pair
bookmarkSchema.index({ userId: 1, storyId: 1 }, { unique: true });

export const Bookmark = model<IBookmark>('Bookmark', bookmarkSchema);
