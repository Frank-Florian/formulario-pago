import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    celular: "",
  });

  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (formData.celular.length !== 9 || formData.dni.length !== 8) {
      alert(
        "Por favor, ingrese un número de celular válido (9 dígitos) y un DNI válido (8 dígitos)."
      );
      return;
    }

    // Redireccionar al enlace de pago
    window.location.href = "https://mpago.la/16nNm1D";
  };

  return (
    <div className="container">
      <h1>Elige tu plan de suscripción</h1>
      <div className="form-container">
        <form onSubmit={handleSubscribe}>
          <label htmlFor="nombre" className="floating-label">
            Nombre:
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder=" "
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="dni" className="floating-label">
            DNI (8 dígitos):
            <input
              type="text"
              id="dni"
              name="dni"
              placeholder=" "
              value={formData.dni}
              onChange={handleChange}
              maxLength="8" // Limita a 8 dígitos
              required
            />
          </label>
          <label htmlFor="celular" className="floating-label">
            Celular (9 dígitos):
            <input
              type="tel"
              id="celular"
              name="celular"
              placeholder=" "
              value={formData.celular}
              onChange={handleChange}
              pattern="\d{9}" // Acepta  9 dígitos
              maxLength="9" // Limita a 9 dígitos
              required
            />
          </label>
          <div className="plan-options">
            <div
              className={
                selectedPlan === "Plan Mensual" ? "selected-plan" : "plan"
              }
              onClick={() => setSelectedPlan("Plan Mensual")}
            >
              <label>
                <input
                  type="radio"
                  name="plan"
                  value="Plan Mensual"
                  checked={selectedPlan === "Plan Mensual"}
                  onChange={handlePlanChange}
                />
                Plan Básico S/9.90
              </label>
            </div>
            <div
              className={
                selectedPlan === "Plan Anual" ? "selected-plan" : "plan"
              }
              onClick={() => setSelectedPlan("Plan Anual")}
            >
              <label>
                <input
                  type="radio"
                  name="plan"
                  value="Plan Anual"
                  checked={selectedPlan === "Plan Anual"}
                  onChange={handlePlanChange}
                />
                Plan Premium S/69.90
              </label>
            </div>
          </div>
          <button className="subscribe-button" type="submit">
            Suscribir
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
