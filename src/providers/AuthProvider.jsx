/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // {displayName: 'khan'}

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
        
    }
    const updateUser = (photo,name) =>{
        return updateProfile(auth,photo,name)
    }
    // const googleSingIn = ()=>{
    //     return signInWithPopup(auth,provider)
    // }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('logged in user inside auth state observer',loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const  authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser,
        // googleSingIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;