import React, { useState } from "react";

const TrafficLight = () => {
  //Guardo el valor de los colores con brillo en brightness
  const [brightness, setBrightness] = useState([100, 100, 100]);

  //Creo una función que pasaré al onClick de los botones
  const handleCircleClick = (index) => {
    setBrightness((prevBrightness) => {
      //Copio el contenido de prevBrightness en un nuevo array (..prevBrightness), de esta forma
      //estoy manipulando el mismo contenido pero guardándolo en updatedBrightness.
      const updatedBrightness = [...prevBrightness];

      // Recorro el array con los colores actualizados
      for (let i = 0; i < updatedBrightness.length; i++) {
        // Comprueba si el índice actual es igual al índice proporcionado como argumento
        // Si el indice coincide con el último valor de updatedBrightness, añade 100 al color
        //(la cifra es la intensidad del color) y sino coincide, añade 50 (bajo la intensidad).
        updatedBrightness[i] = i === index ? 100 : 50;
      }

      // Devuelvo los colores actualizados
      return updatedBrightness;
    });
  };

  return (
    <div>
      <h1>Traffic Light Diego Gómez</h1>
      <div
        className="border rounded"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          width: "150px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <div
            // Llamo en el onclick a la función pasando la posición de cada color.
            onClick={() => handleCircleClick(0)}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              // Para el cambio de color en los colores, uso la variable brightness que guardaba la intensidad
              //de los colores. Uso la posición de la variable para escoger a que color hace el cambio.
              backgroundColor: `rgba(0, 255, 0, ${brightness[0] / 100})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "25px",
            }}
          ></div>
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <div
            onClick={() => handleCircleClick(1)}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: `rgba(255, 255, 0, ${brightness[1] / 100})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "25px",
            }}
          ></div>
        </div>

        <div>
          <div
            onClick={() => handleCircleClick(2)}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: `rgba(255, 0, 0, ${brightness[2] / 100})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "25px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
