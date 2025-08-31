const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: { 
    type: String, 
    enum: ["admin", "user"], 
    default: "user" 
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
