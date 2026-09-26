import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCryc06MkW_seHcVsJBh8BI-10eaAmACs",
  authDomain: "glo-00.firebaseapp.com",
  projectId: "glo-00",
  storageBucket: "glo-00.firebasestorage.app",
  messagingSenderId: "266721203166",
  appId: "1:266721203166:web:0a4a4fc40c2e390e96c34f",
  measurementId: "G-947HRTGS5J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const productsRef = collection(db, "products");

const snapshot = await getDocs(productsRef);

snapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});
