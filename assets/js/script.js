window.onscroll = function() {stickyHeader()};

function stickyHeader() {
    var header = document.getElementById("myNav");
    var getS = document.getElementById("pill")

    if (window.pageYOffset > 600) { /* Cambia colore quando si scrolla verso il basso */
        header.style.backgroundColor = "#fff"; // Colore di sfondo bianco
        getS.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#ffc017"; // sfondo originale
        getS.style.backgroundColor = "#181919"
    }
}