import mongoose from "mongoose";
export interface IBookmark {
  userId: mongoose.Schema.Types.ObjectId;
  prophetSlug: string;
}
const bookmarkSchema = new mongoose.Schema<IBookmark>(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      prophetSlug: {
        type: String,
        required: true,
      },
    },
    {
        timestamps: true,   
    }
  );
  
  export const Bookmark = mongoose.model<IBookmark>("Bookmark", bookmarkSchema);
  export default Bookmark;