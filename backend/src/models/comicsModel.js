const { Schema, model } = require("mongoose");

const comicSchema = new Schema(
  {
    pubHouse: { type: String, required: true },
    name: { type: String, required: true },
    mainCharacter: { type: String, required: true },
    storyArc: { type: String, required: true },
    numPages: { type: Number, required: true },
    cover: { type: String, required: true },
    format: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports =model("Comics", comicSchema);

