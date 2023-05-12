/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    // {displayName: 'khan'}

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    const updateUser = (photo,name) =>{
        return updateProfile(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('logged in user inside auth state observer',loggedUser);
            setUser(loggedUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const  authInfo ={
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;