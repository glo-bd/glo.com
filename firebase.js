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

async function loadProducts() {

  const container = document.getElementById("products-container");

  if (!container) {
    alert("products-container not found");
    return;
  }

  try {

    const snapshot = await getDocs(collection(db, "products"));

    if (snapshot.empty) {
      container.innerHTML = "<h3>No products found</h3>";
      return;
    }

    container.innerHTML = "";

    snapshot.forEach((doc) => {

      const product = doc.data();

      alert(JSON.stringify(product));

      const card = document.createElement("div");

      card.className = "product-card";

      card.innerHTML = `
  <div class="product-image">
    <img 
      src="${product.Image || product.image || ""}" 
      alt="${product.Name || product.name || "GLO Product"}"
    >
  </div>

  <div class="product-info">
    <h3>${product.Name || product.name || "GLO Product"}</h3>

    <p class="price">
      ৳${product.Price || product.price || 0}
    </p>

    <p class="description">
      ${product.Description || product.description || ""}
    </p>

    ${
      (product.Stock === true || product.stock === true)
        ? `<button class="add-cart-btn">Add to Cart</button>`
        : `<button class="add-cart-btn" disabled>Stock Out</button>`
    }
  </div>
`;

      container.appendChild(card);

    });

  } catch (error) {

    alert("Firebase Error: " + error.message);

  }
}

loadProducts();
