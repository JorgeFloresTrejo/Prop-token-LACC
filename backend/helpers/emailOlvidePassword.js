"use strict";
import nodemailer from "nodemailer";

// Credenciales para el envío del email
const emailOlvidePassword = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    //   enviar el email
    const {email, nombre, token} = datos;

    //   Contenido del email
        try {
       let info = await transport.sendMail({
            from: "t.mailtrap.live",
            to: email,
            subject: "Reestablece tu contraseña",
            text: "Reestablece tu contraseña",
            html: `<p>Hola ${nombre}, Has solicitado reestablecer tu contraseña  </p>
                <p> Sigue el siguiente enlace para generar tu nueva contraseña:  
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> Reestablecer contraseña </a> </p>

                <p> Si tú no creaste esta cuenta, puedes ignorar este mensaje </p>
                `
        });

        console.log("Mensaje enviado: %s", info.messageId);

        } catch (error) {
        console.error("Error al enviar el mensaje:", error.message);
        }



}

export default emailOlvidePassword;