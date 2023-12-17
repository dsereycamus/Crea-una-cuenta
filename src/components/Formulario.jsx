import { useState } from "react";
import "./Formulario.css";

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 formulario form-group">
      <div className="mb-3">
        {/* <label htmlFor="nombre" className="form-label">
          Nombre
        </label> */}
        <input
          placeholder="Nombre"
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        {/* <label htmlFor="email" className="form-label">
          Email
        </label> */}
        <input
          placeholder="tuemail@ejemplo.com"
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        {/* <label htmlFor="password" className="form-label">
          Contraseña
        </label> */}
        <input
          placeholder="Contraseña"
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        {/* <label htmlFor="confirmPassword" className="form-label">
          Confirma tu contraseña
        </label> */}
        <input
          placeholder="Confirma tu contraseña"
          type="password"
          className="form-control"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
