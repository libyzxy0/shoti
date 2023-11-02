import mongoose, { Document, Schema, Model } from 'mongoose';

interface IVideo extends Document {
  url: string;
  id: string;
  addedDate: Date;
}
const videoSchema: Schema<IVideo> = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  addedDate: {
    type: Date,
    required: true,
  },
});

const Video: Model<IVideo> = mongoose.model<IVideo>('Video', videoSchema);

export default Video;
