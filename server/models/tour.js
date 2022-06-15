import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  name: {type: String},
  creator: String,
  // tags: [{type: String}],
  imageFile:{type: String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;