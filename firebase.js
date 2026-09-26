import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

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


// Load products from Firebase
async function loadProducts() {

  const container = document.getElementById("products-container");

  if (!container) return;

  try {

    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);

    container.innerHTML = "";

    if (snapshot.empty) {
      container.innerHTML = "<p>No products available.</p>";
      return;
    }

    snapshot.forEach((doc) => {

      const product = doc.data();

      const card = document.createElement("div");

      card.className = "product-card";

      card.innerHTML = `
  <img src="${product.Image || ""}" alt="${product.Name || "GLO Product"}">

  <h3>${product.Name || "GLO Product"}</h3>

  <p class="price">৳${product.Price || 0}</p>

  <button>Add to Cart</button>
`;
      `;

      container.appendChild(card);

    });

  } catch (error) {

  console.error("Firebase error:", error);

  container.innerHTML = `
    <p style="color:red;">
      Firebase Error: ${error.message}
    </p>
  `;

  }
}


// Start loading products
loadProducts();
