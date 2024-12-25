import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxcMb0G0TK6qzLxk2lFyK6JjiZUVonTSk",
  authDomain: "mern-estate-82cfc.firebaseapp.com",
  projectId: "mern-estate-82cfc",
  storageBucket: "mern-estate-82cfc.appspot.com",
  messagingSenderId: "803062241998",
  appId: "1:803062241998:web:0153e8bf5d50efc9604e9f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Storage
const storage = getStorage(app);
export default storage;