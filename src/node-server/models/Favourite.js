/* eslint-disable fp/no-delete */
const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

favouriteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line fp/no-mutation
    returnedObject.id = returnedObject._id.toString();
    returnedObject.user = returnedObject.user.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
