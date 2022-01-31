import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100; //pra ficar em cm. Ex.: 1,80
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso.`);
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está no peso ideal.`);
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso.`);
    } else if (imc > 34.9) {
      setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Cuidado! Você está obeso.`);
    }
  }

  return (
    <div className="app">
      <h1>Calculador IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="area-input">
        <input
          type="number"
          placeholder="Peso em (kg) Ex.: 80kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          pattern="[0-9.]+"
          type="number"
          placeholder="Altura em (cm) Ex.: 180cm"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && calcularIMC()}
        />
        <button
        onClick={calcularIMC}
        >
          Calcular</button>
      </div>
      <h2>{mensagem}</h2>

    </div>
  );
}
