'use server'
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };
  
  const app = initializeApp(firebaseConfig);

  
  
  export async function login(email: string, password: string) {
    const auth = getAuth(app);
    return await signInWithEmailAndPassword(auth, email, password).then((userCredential) => { 
        return userCredential.user.getIdToken();
    });
}


export async function testTime(){
    const timestamp = Math.floor(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 365 * 90);
    return timestamp;
}

export async function register(email: string, password: string, name: string, dob: string){
    const db = getFirestore(app);
    const timestamp = Math.floor(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 365 * 90);
    
    async function addUser() {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            dob: dob,
            email: email,
            timestamp: timestamp
        });
        console.log("Document written with ID: ", docRef.id);
    }
    
    const auth = getAuth(app);

    return await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        addUser();
        return userCredential.user.getIdToken();
    });

}

export async function getMyTime(email: string){
    const db = getFirestore(app);
    const docRef = collection(db, "users");
    const q = await getDocs(docRef);
    let time = 0;
    q.forEach((doc) => {
        if(doc.data().email == email){
            time = doc.data().timestamp;
        }
    });
    return time;
}