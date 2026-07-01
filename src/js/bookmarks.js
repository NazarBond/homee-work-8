const input = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  list.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = bookmark;
    link.textContent = bookmark;
    link.target = "_blank";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";

    editBtn.addEventListener("click", () => {
      const newUrl = prompt("Введіть новий URL", bookmark);

      if (newUrl) {
        bookmarks[index] = newUrl;
        saveBookmarks();
        renderBookmarks();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", () => {
      bookmarks.splice(index, 1);
      saveBookmarks();
      renderBookmarks();
    });

    li.append(link, editBtn, deleteBtn);

    list.append(li);
  });
}

addBtn.addEventListener("click", () => {
  const url = input.value.trim();

  if (url === "") return;

  bookmarks.push(url);

  saveBookmarks();

  renderBookmarks();

  input.value = "";
});

renderBookmarks();
