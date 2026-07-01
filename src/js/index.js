import "../css/styles.css";

import "./bookmarks";
import "./form";

import products from "../data/products";
import Handlebars from "handlebars";

const templateSource = `
<ul class="product-list">

{{#each this}}

<li class="product-item">
  <h2 class="name">{{name}}</h2>
  <p class="price">Price: {{price}}</p>
  <p class="description">{{description}}</p>
</li>

{{/each}}

</ul>
`;

const template = Handlebars.compile(templateSource);

const productsContainer = document.querySelector("#products");
const searchInput = document.querySelector("#search");

function renderProducts(items) {
  productsContainer.innerHTML = template(items);
}

renderProducts(products);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});
