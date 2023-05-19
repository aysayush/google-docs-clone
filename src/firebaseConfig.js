import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQhI71nf1py24Mi9yqoqfJLtiacY1d9HU",
  authDomain: "docs-clone-1b94d.firebaseapp.com",
  projectId: "docs-clone-1b94d",
  storageBucket: "docs-clone-1b94d.appspot.com",
  messagingSenderId: "235821414349",
  appId: "1:235821414349:web:8ba21717ff4404af1af684",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
