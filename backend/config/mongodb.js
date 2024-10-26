import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  mongoose.connection.on("error", (err) => {
    console.error(`Database connection error: ${err.message}`);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
      writeConcern: { w: "majority" }, // Ensure this is set correctly
    });
  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
  }
};

export default connectDB;

// Note: Avoid using '@' symbol in your database user's password to prevent connection errors.
