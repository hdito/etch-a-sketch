function draw(size) {
    const table = document.querySelector('#table');
    const empty = document.createElement("div");
    empty.setAttribute("id", "table");
    const parent = table.parentElement;
    parent.replaceChild(empty, table)
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', function (event) {
                event.target.style.backgroundColor = "orange"
            });
            div.setAttribute('class', 'square');
            row.appendChild(div);
        }
        empty.append(row)
    }
}

draw(16);
const clearButton = document.querySelector('button');
clearButton.addEventListener('click', function () {
    let size;
    do {
        size = prompt('size?', 16);
    } while (size > 100 || !/^\d\d?\d?$/.test(size.toString()))
    draw(size);
})