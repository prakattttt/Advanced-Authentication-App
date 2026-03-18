import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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
      select: false, 
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

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Users = model("User", UserSchema);

export default Users;