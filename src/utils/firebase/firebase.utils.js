import { initializeApp } from "firebase/app";
import { 
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

