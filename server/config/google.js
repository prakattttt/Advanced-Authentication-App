import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          let username = profile.displayName
            ? profile.displayName.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 20)
            : `google_${profile.id.slice(-8)}`;

          if (username.length < 3) username += "_user";

          const email = profile.emails?.[0]?.value;
          if (!email)
            return done(new Error("Google did not provide an email"), null);

          user = await User.create({
            username,
            email,
            googleId: profile.id,
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);
