import passport from "passport";
import express from "express";
import configureGoogleAuth from "../middleware/authGoogle.js";

const router = express.Router();

//Configurar la autentificación de google
configureGoogleAuth();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
//google
//ruta principal
router.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Acceder con google</a>");
  //res.send("/auth/google");
});

//ruta para iniciar la autentificación
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

//Ruta de callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/admin",
    failureRedirect: "/auth/failure",
  })
);

//Ruta para mensaje de error
router.get("/auth/failure", (req, res) => {
  res.send("Hay algo mal aquí..");
});

// Ruta protegida que verifica si el usuario está autenticado
router.get("/protected", isLoggedIn, (req, res) => {
  const { user } = req;
  if (user && user.accessToken) {
    const accessToken = user.accessToken;
    res.json({ accessToken });
  } else {
    res.status(401).json({ error: "No se encontró accessToken" });
  }
});

//Cerrar sesión
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    // Cierre de sesión exitoso
    req.session.destroy();
    res.send("Adiós");
  });
});

export default router;
