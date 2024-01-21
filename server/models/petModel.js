// IMPORTS -
const mongoose = require("mongoose");


// PET SCHEMA -
const petSchema = new mongoose.Schema(
  {
    
  },

  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Pet", petSchema);
