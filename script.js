let carrito = [];
let total = 0;

function agregarCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;

  actualizarCarrito();
  mostrarMensaje(`${producto} agregado al carrito 🛒`);
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = item.producto;
    const span = document.createElement("span");
    span.textContent = `$${item.precio.toLocaleString()}`;
    li.appendChild(span);
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total.toLocaleString();
  document.getElementById("contadorCarrito").textContent = carrito.length;
}

function mostrarMensaje(texto) {
  const mensajes = document.getElementById("mensajes");
  mensajes.textContent = texto;
  setTimeout(() => { mensajes.textContent = ""; }, 2000);
}

// Botón animado con camión
const orderBtn = document.getElementById("orderBtn");
orderBtn.addEventListener("click", () => {
  if (carrito.length === 0) {
    mostrarMensaje("El carrito está vacío ❌");
    return;
  }

  // Efecto camión
  orderBtn.classList.add("enviado");
  mostrarMensaje("🚚  Tu pedido está en camino!");

  // Reiniciar después de un tiempo
  setTimeout(() => {
    carrito = [];
    total = 0;
    actualizarCarrito();
    orderBtn.classList.remove("enviado");
  }, 3000);
});
