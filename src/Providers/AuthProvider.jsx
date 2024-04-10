import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config'


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
       
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('user in auth state changed', currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={ user, createUser, signIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children: PropTypes.node,
}