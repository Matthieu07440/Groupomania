const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGODB_URL +
      "@groupomania.csyge.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connexion to MongoDB failed", err));
