export default function template(items) {
  return `
    <ul class="product-list">
      ${items
        .map(
          (item) => `
        <li class="product-item">
          <h2 class="name">${item.name}</h2>
          <p class="price">Price: ${item.price}</p>
          <p class="description">${item.description}</p>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}
