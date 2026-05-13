let naslov = document.getElementById("imeKafica");

naslov.onmouseover = function () {
    naslov.innerText = "Deez Nuts ";
};

naslov.onmouseout = function () {
    naslov.innerText = "Deez ☕";
};
function toggleSekciju(id) {
    const sekcija = document.getElementById(id);

    if (sekcija.style.display === "none") {
        sekcija.style.display = "block";
    } else {
        sekcija.style.display = "none";
    }
}