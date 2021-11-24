import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    comp_id: {type: String, required: true},
    instance: {type: String, required: true},
    picture: {type: String}
  });

export default mongoose.model('Option', schema)