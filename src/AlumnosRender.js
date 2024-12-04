import React, { useEffect, useState } from "react";

const AlumnosList = () => { const [alumnos, setAlumnos] = useState([])
const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

const clickAlumno = (alumno) => {
  if (alumnoSeleccionado === alumno) {
    setAlumnoSeleccionado(null);
  } else {
    setAlumnoSeleccionado(alumno);
  }
};

useEffect(() => {

    fetch('/alumnos.json').then(response => response.json()).then((data) => setAlumnos(data.alumnos)).catch((error) => {console.error("Error llamando al JSON:", error);
    });
}, []);

return (
  <div>
    <h1>Texto de prueba uwu</h1>
    <ul>
      {alumnos.map((alumno) => (
        <li key={alumno.nombre} onClick={() => clickAlumno(alumno)}>
        {alumno.nombre}
        {alumnoSeleccionado === alumno && (
          <div>
            <p>Acceso a datos:</p>
            <ul>
            <li>Primera evaluación: {alumno.asignaturas['Acceso a datos'].primera_evaluacion}</li>
            <li>Segunda evaluación: {alumno.asignaturas['Acceso a datos'].segunda_evaluacion}</li>
            <li>Tercera evaluación: {alumno.asignaturas['Acceso a datos'].tercera_evaluacion}</li>
            </ul>

            <p>Programación:</p>
            <ul>
            <li>Primera evaluación: {alumno.asignaturas['Programación'].primera_evaluacion}</li>
            <li>Segunda evaluación: {alumno.asignaturas['Programación'].segunda_evaluacion}</li>
            <li>Tercera evaluación: {alumno.asignaturas['Programación'].tercera_evaluacion}</li>
            </ul>

            <p>Desarrollo de Interfaces:</p>
            <ul>
            <li>Primera evaluación: {alumno.asignaturas['Desarrollo de Interfaces'].primera_evaluacion}</li>
            <li>Segunda evaluación: {alumno.asignaturas['Desarrollo de Interfaces'].segunda_evaluacion}</li>
            <li>Tercera evaluación: {alumno.asignaturas['Desarrollo de Interfaces'].tercera_evaluacion}</li>
            </ul>
            <br/>
          </div>
        )}
      </li>
      ))}
    </ul>
    </div>
  );
};

export default AlumnosList;