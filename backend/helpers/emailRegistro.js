"use strict";
import nodemailer from "nodemailer";

// Credenciales para el envío del email
const emailRegistro = async (datos) =>{
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
            subject: "Comprueba tu cuenta",
            text: "Comprueba tu cuenta",
            html: `<p>Hola ${nombre}, Comprueba tu cuenta  </p>
                <p> Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:  
                <a href="${process.env.FRONTEND_URL}/login/confirmar/${token}"> Comprobar cuenta </a> </p>

                <p> Si tú no creaste esta cuenta, puedes ignorar este mensaje </p>
                `
        });

        console.log("Mensaje enviado: %s", info.messageId);

        } catch (error) {
        console.error("Error al enviar el mensaje:", error.message);
        }



}

export default emailRegistro;
