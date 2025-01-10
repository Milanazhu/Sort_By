const addBook = document.createElement('button');
addBook.textContent = 'Add Book';
addBook.classList.add('book-btn');
document.body.append(addBook);

let books = [];
function renderList(arr) {
    let listEl = document.querySelector('ul');
    if (!listEl) {
        listEl = document.createElement('ul');
        document.body.append(listEl);
    } else {
        listEl.innerHTML = "";
    }

    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        listEl.append(liEl);
    }
}
addBook.onclick = function () {
    let add = prompt("Add Book")
    if (add !== "") {
        books.push(add)
        renderList(books);
    } else alert("Необходимо добавить книгу");
}
const buttonSearch = document.createElement("button");
buttonSearch.classList.add('bth-search');
buttonSearch.textContent = "button";
document.body.append(buttonSearch);
function find(arr, search) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break;
        }
    }
    return result;
}

buttonSearch.onclick = function () {
    const search = prompt("Enter the product name:");
    const findIndex = find(books, search)
    if(findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex + 1})`).style.background = "yellow";
    } else {
        alert("Product not found")
    }
}
renderList(books);