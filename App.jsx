import ProductoApp from "./components/ProductoApp";
import arduino from "./img/arduino.jpeg";
import protoboard from "./img/protoboard.png";
import raspberry from "./img/raspberry.png";
import sensor from "./img/sensor.png";
import displayLCD from "./img/displayLCD.png";
import modulo_bluetooth from "./img/modulo_bluetooth.png";


function App() {
  const productos = [
    {
      id: 1,
      nombre: "Arduino Uno",
      precio: 15,
      categoria: "Microcontroladores",
      disponible: true,
      imagen: arduino
    },

    {
      id: 2,
      nombre: "Raspberry Pi 5",
      precio: 90,
      categoria: "Computación",
      disponible: true,
      imagen: raspberry
    },

    {
      id: 3,
      nombre: "Protoboard",
      precio: 8,
      categoria: "Prototipado",
      disponible: true,
      imagen: protoboard
    },

    {
      id: 4,
      nombre: "Sensor Ultrasónico HC-SR04",
      precio: 5,
      categoria: "Sensores",
      disponible: false,
      imagen: sensor
    },

    {
      id: 5,
      nombre: "Display LCD 16x2",
      precio: 10,
      categoria: "Visualización",
      disponible: true,
      imagen: displayLCD
    },

    {
      id: 6,
      nombre: "Módulo Bluetooth HC-05",
      precio: 7,
      categoria: "Comunicación",
      disponible: false,
      imagen: modulo_bluetooth
    }
  ];

  return (
    <div>
      <h1>Catálogo de Componentes Electrónicos</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {productos.map((producto) => (
          <ProductoApp
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
}

export default App;