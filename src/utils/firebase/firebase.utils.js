import { initializeApp } from "firebase/app";
import { 
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { 
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhe-tSJIrY7l7D3brR6fmU_2OYPW1Msjg",
  authDomain: "ecommerce-805ca.firebaseapp.com",
  projectId: "ecommerce-805ca",
  storageBucket: "ecommerce-805ca.appspot.com",
  messagingSenderId: "706656987537",
  appId: "1:706656987537:web:74b84d5f90f04c43289230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider({
	prompt: "select_account"
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
	// Despite of not having document reference and users collection, google will still generate this object
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot.exists());
	
	// creating users collection
	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		} catch(error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
};

 
