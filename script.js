
function enviarWhatsapp() {
    const cantidad = document.getElementById("cantidad").value;
    const color = document.getElementById("tiraColor").value;
    const mensaje = `Hola Paglyu! Quiero hacer un pedido personalizado con:
- Color de tira: ${color}
- Cantidad: ${cantidad} banderines
¡Gracias!`;

    const url = `https://wa.me/5491127553157?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    setTimeout(() => {
        window.location.href = "gracias.html";
    }, 2000);
}

document.getElementById("tiraColor").addEventListener("input", function () {
    const preview = document.getElementById("preview");
    preview.innerHTML = '';
    const cantidad = parseInt(document.getElementById("cantidad").value);
    for (let i = 0; i < cantidad; i++) {
        const banderin = document.createElement("div");
        banderin.className = "banderin";
        banderin.style.borderTopColor = this.value;
        preview.appendChild(banderin);
    }
});
