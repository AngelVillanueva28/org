import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuración
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const estiloTitulo = { borderColor: colorPrimario };
  const estiloFondo = { 
    backgroundColor: hexToRgba(colorPrimario, 0.6) 
  };

  const cambiarColor = (e) => {
    actualizarColor(e.target.value, id);
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloFondo}>
          <input
            className="input-color"
            type="color"
            value={rgbaToHex(hexToRgba(colorPrimario, 0.6))}
            onChange={cambiarColor}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

function rgbaToHex(rgba) {
  // Separa los valores de R, G y B y el valor de opacidad A de RGBA
  const values = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*(?:\.\d+)?)?\)$/);
  
  let hex = "#";
  
  // Convierte los valores de R, G y B a hexadecimal y los agrega al resultado final
  for (let i = 1; i <= 3; i++) {
    let hexValue = parseInt(values[i]).toString(16);
    hexValue = hexValue.length === 1 ? "0" + hexValue : hexValue;
    hex += hexValue;
  }
  
  return hex;
}


export default Equipo;
