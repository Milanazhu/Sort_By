const addProduct = document.createElement('button');
addProduct.textContent = 'Add product';
addProduct.classList.add('book-btn');
document.body.append(addProduct);

let products = [];

function rendering(arr) {
    listEl.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i+1}. ${arr[i]}`;
        listEl.append(liEl);
    }
}

function sortList(arr) {
    arr.sort();
    rendering(arr); 
}

addProduct.onclick = function () {
    let add = prompt("Enter product name");
    if (add !== "") {
        products.push(add); 
    } else {
        alert("You must enter product name");
    }
    sortList(products);
};

const listEl = document.createElement("ul");
document.body.append(listEl);
