// Menu
const menu = document.createElement("div");
menu.classList.add("menu");
menu.innerHTML = `
  <h1>Our Menu</h1>
  <h2 class="category">Breads and Pastries</h2>
  <div class="product-container">
    <div class="product-box">
      <span class="product-icon">🥖</span>
      <div>Freshly Baked Baguette</div>
    </div>
    <div class="product-box">
      <span class="product-icon">🥐</span>
      <div>Buttery Croissants</div>
    </div>
    <div class="product-box">
      <span class="product-icon">🍞</span>
      <div>Classic Sourdough</div>
    </div>
  </div>
  <h2 class="category">Beverages</h2>
  <div class="product-container">
    <div class="product-box">
      <span class="product-icon">🍵</span>
      <div>Chai</div>
    </div>
    <div class="product-box">
      <span class="product-icon">☕</span>
      <div>Espresso Coffee</div>
    </div>
    <div class="product-box">
      <span class="product-icon">🍃</span>
      <div>Matcha Latte</div>
    </div>
  </div>
`;

export default menu