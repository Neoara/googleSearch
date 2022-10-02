import { GoogleButton } from "react-google-button";
import React from 'react'
import {auth} from '../firebase'
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export const SignIn = () => {

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider); 
    }

  return (
    <GoogleButton onClick={login}/>
  )
}


export default SignIn