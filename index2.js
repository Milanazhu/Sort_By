const addHeight = document.createElement('button');
addHeight.textContent = 'Введите рост';
addHeight.classList.add('height-btn');
document.body.append(addHeight);

const filter = document.createElement('button');
filter.textContent = 'Фильтровать по росту';
filter.classList.add('filter-btn');
document.body.append(filter);

function filtr(arr, minHeight) {
    const result = [];
    for (const item of arr) {
        if (item >= minHeight) {
            result.push(item);
        }
    }
    return result; // Возвращаем массив с результатами
}
let heights = [ ];
function renderList(heights) {
    listEl.innerHTML = "";
    for (let i = 0; i < heights.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${heights[i]}`;
        listEl.append(liEl);
    }
}


addHeight.onclick = function () {
    let add = prompt("Введите рост");
    if (add !== "") {
        heights.push(add);
        renderList(heights);
    } else {
        alert("Введите корректное значение роста!");
    }
};

filter.onclick = function () {
    const minHeight = prompt('Введите минимальный рост');
    if (minHeight !== null) {
        const result = filtr(heights, minHeight);
        renderList(result); 
    } else {
        alert("Введите корректное значение минимального роста!");
    }
}
const listEl = document.createElement('ul');
document.body.append(listEl);