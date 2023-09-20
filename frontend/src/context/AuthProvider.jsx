import {useState, useEffect, createContext} from 'react';
import clienteAxios from '../config/axios';

 const AuthContext = createContext();

 const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({});

    //useEffect para que cuando cargue la app, revise si está autenticado o no
    useEffect(() =>{
        const autenticarUsuario = async () =>{
            const token = localStorage.getItem('token');  //Obtener el token
            if(!token)return;   //Si no existe un token, se detiene la ejecución
           
            //Header de configuración
            const config = {
                headers:{   //Estos headers son la autorización y se envían antes de todas las peticiones
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try{
                const { data } = await clienteAxios('/perfil', config);
                setAuth(data); 
            }catch(error){
                console.log(error.response.data.msg);
                setAuth({})
            }
        }

        autenticarUsuario();
    },[]);

    return(
        <AuthContext.Provider
        value={{ //En este value se pone lo que va a estar a disposición para acceder desde los demás componentes
            auth,
            setAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
 }

 export{
    AuthProvider
 }

 export default AuthContext