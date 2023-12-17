import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import "./Registro.css";
import { useState } from "react";

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const handleFormSubmit = ({ nombre, email, password, confirmPassword }) => {
    // Validación de campos
    if (!email || !password || !confirmPassword) {
      showAlert("Todos los campos son obligatorios", "danger");
      return;
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Formato de email incorrecto", "danger");
      return;
    }

    // Validación de contraseñas iguales
    if (password !== confirmPassword) {
      showAlert("Las contraseñas no coinciden", "danger");
      return;
    }

    // Si pasa todas las validaciones, se muestra mensaje de éxito
    showAlert("Registro exitoso", "success");
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1>Crea una cuenta</h1>
        <SocialButton icon="facebook" />
        <SocialButton icon="github" />
        <SocialButton icon="linkedin" />
        <p>o usa tu email para registrarte</p>
        <Formulario onSubmit={handleFormSubmit} />
        {alertMessage !== "" && (
          <Alert message={alertMessage} type={alertType} />
        )}
      </div>
    </div>
  );
};

export default Registro;
