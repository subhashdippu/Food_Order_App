import React, { createContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import app from "../../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("fsakjshdkjfhn");
    const [loading, setLoading] = useState(true)
    // create an account

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signup with gmail
    const signUpWithGmail = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    // login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout
    const logout = () => {
        return signOut(auth);
    }

    // Check user signedIn
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                const uid = user.uid;
            }
        });
        return () => {
            return unsubscribe
        }
    }, [])

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL

        });
    }
    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider; 