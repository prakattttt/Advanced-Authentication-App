import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import AppError from "../utils/AppError.js";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      trim: true,
      unique: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username must be at most 20 characters"],
      validate: {
        validator: (val) => /^[a-zA-Z0-9_]+$/.test(val),
        message: "Username can only contain letters, numbers, and underscores",
      },
    },

    email: {
      type: String,
      required: [true, "Email is required!"],
      lowercase: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address!",
      },
    },

    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [8, "Password must be at least 8 characters"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0,
          }),
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      },
    },

    refreshTokens: [
      {
        token: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    googleId: String,
    githubId: String,
    facebookId: String,
  },
  { timestamps: true },
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

UserSchema.statics.createUser = async function (username, email, password) {
  if (!username || !email || !password)
    throw new AppError("Please enter all of your credientials!", 401);

  return await this.create({
    username,
    email,
    password,
  });
};

UserSchema.statics.loginUser = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user)
    throw new AppError(`User with the email ${email} doesn't exist!`, 404);

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new AppError("Invalid password! Please try again!", 401);

  return user;
};

UserSchema.methods.addRefreshToken = async function (refreshToken) {
  if (!refreshToken) throw new AppError("No refresh token provided!", 403);

  this.refreshTokens = this.refreshTokens.filter(
    (t) => t.token !== refreshToken,
  );

  this.refreshTokens.push({ token: refreshToken });

  await this.save();
};

UserSchema.statics.getUsername = async function (_id) {
  const user = await this.findOne({ _id });

  if (!user) {
    throw new AppError("User not found in the database!", 400);
  }

  return user.username;
};

UserSchema.statics.removeRefreshToken = async function (token) {
  const user = await this.findOne({
    "refreshTokens.token": token,
  });

  if (!user) return null;

  user.refreshTokens = user.refreshTokens.filter((t) => t.token !== token);

  await user.save();

  return user;
};

const Users = model("User", UserSchema);

export default Users;
