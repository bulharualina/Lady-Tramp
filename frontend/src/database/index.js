import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://bulharualina10:123456782024@cluster0.thzdf8o.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log(`Database conected successfully!`))
    .catch((err) =>
      console.log(`Getting Error from database connection! ${err.message}`)
    );
};

export default connectToDB;
