import styles from "./productoApp.module.css";

function ProductoApp({ producto }) {
  return (
    <div className={styles.card}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />

      <h2>{producto.nombre}</h2>

      <p><strong>Precio:</strong> ${producto.precio}</p>

      <p><strong>Categoría:</strong> {producto.categoria}</p>

      <p
        className={
          producto.disponible
            ? styles.disponible
            : styles.agotado
        }
      >
        {producto.disponible ? "Disponible" : "Agotado"}
      </p>
    </div>
  );
}

export default ProductoApp;