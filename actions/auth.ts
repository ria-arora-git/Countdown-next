'use server'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,  } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };
  

  
  
  export async function login(email: string, password: string) {
      const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function register(email: string, password: string, name: string, dob: string){
    // create a timestamp random from now to next 90 years
    const timestamp = Math.floor(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 365 * 90);
    return timestamp;
}

