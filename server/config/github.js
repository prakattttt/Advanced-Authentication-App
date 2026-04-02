import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../models/userModel.js";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ githubId: profile.id });

        if (!user) {
          let username = profile.username
            ? profile.username.replace(/[^a-zA-Z0-9_]/g, "_")
            : `github_${profile.id.slice(-8)}`;

          if (username.length < 3) username += "_user";

          const email = profile.emails?.[0]?.value || profile._json.email;
          if (!email)
            return done(new Error("GitHub did not provide an email"), null);

          user = await User.create({
            username,
            email,
            githubId: profile.id,
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);
