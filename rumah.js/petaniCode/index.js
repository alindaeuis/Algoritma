let dataBarang = [
    "spidol",
    "pensil"
];

function showBarang() {
    let listBarang = document.getElementById('listBarang');

    listBarang.innerHTML = "";

    for(i = 0; i < dataBarang.length; i++) {
        let btnEdit = "<a href='#' onClick='editBarang("+i+")'>Edit</a>";
        let btnDelate = "<a href='#' onClick='delateBarang("+i+")'>delate</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ("+btnEdit + " | "+ btnDelate +")</li>";

    }
}

function addBarang() {
    let input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id) {
    let newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function delateBarang(id) {
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();