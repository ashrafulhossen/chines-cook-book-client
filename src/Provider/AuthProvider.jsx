import {
	createUserWithEmailAndPassword,
	getAuth, GoogleAuthProvider, onAuthStateChanged,
	signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setUser(null);
		return signOut(auth);
	};
	const signUpWithGoogle = () => {
		return signInWithPopup(auth, googleProvider)
	}

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		signIn,
		logOut,
		signUpWithGoogle
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
