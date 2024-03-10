import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaxSKa-Fa3QfKJVlKJv6N8fpTzA_fhweo",
  authDomain: "smock-otp-auth.firebaseapp.com",
  projectId: "smock-otp-auth",
  storageBucket: "smock-otp-auth.appspot.com",
  messagingSenderId: "278750077689",
  appId: "1:278750077689:web:0335b68bfcb1f57784f828",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
