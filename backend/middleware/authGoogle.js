import passport from "passport";
import User from "../models/User.js";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const configureGoogleAuth = () => {
  const GOOGLE_CLIENT_ID =
    "402972129109-vmdsbj77l48l0b54qdoimfms8jh5h1h3.apps.googleusercontent.com";
  const GOOGLE_CLIENT_SECRET = "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";

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/google/callback",
      },
      async function (accessToken, refreshToken, profile, cb) {
        console.log("Perfil de usuario de Google:", profile);

        try {
          let usuario = await User.findOne({ googleId: profile.id });

          if (!usuario) {
            usuario = new User({
              googleId: profile.id,
              nombre: profile.name.givenName,
              apellido: profile.name.familyName,
              email: profile.emails[0].value,
            });
            await usuario.save();
          }
          return cb(null, usuario);
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
export default configureGoogleAuth;
