import mongoose from "mongoose"
import User from "../../models/user.model.js";
import pkg from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { jwt } = pkg;

  try {
    const { name, email, password } = req.body;
    // check if a user already exists
    const existingUser = await User.findOne(filter, { email });

    if (existingUser) {
      const error = new Error('User already exists');
      error.statusCode = 409;
      throw error;
    }
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error); 
  }
}

export const signIn = async (req, res, next) => { 

}

export const signOut = async (req, res, next) => { 

}