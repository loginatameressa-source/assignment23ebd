
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.textContent = "";

  for (const item of list) {
    const entry = document.createElement("li");
    entry.classList.add("entry");
    entry.textContent = `${item.name} (${item.category})`;
    listElement.append(entry);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === false);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#show-some");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
