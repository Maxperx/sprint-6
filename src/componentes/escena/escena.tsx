const Escena = [
  "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
  "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas",
  "El héroe decidió atravesar la puerta que le llevaba a casa",
  "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."
];


const listItems = Escena.map((frase, index) => (
  <div key={index}>
    {frase}
  </div>
));


export default listItems;

