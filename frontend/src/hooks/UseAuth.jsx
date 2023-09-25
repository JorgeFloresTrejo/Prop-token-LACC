import { useContext} from 'react';
import AuthContext from '../context/AuthProvider';

const useAuth = () =>{
    return useContext(AuthContext); //useContext es para hacer disponibles los valores del provider, useContext es el provider
}

export default useAuth