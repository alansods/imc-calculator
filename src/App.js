import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, [])

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100; //pra ficar em cm. Ex.: 1,80
    const imc = peso / (alt * alt);

    if(altura.length && peso.length){
      if (imc < 18.6) {
        setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso.`);
      } else if (imc >= 18.6 && imc < 24.9) {
        setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está no peso ideal.`);
      } else if (imc >= 24.9 && imc < 34.9) {
        setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso.`);
      } else if (imc > 34.9) {
        setMensagem(`Seu IMC é: ${imc.toFixed(2)}. Cuidado! Você está obeso.`);
      }
    } else{
      setMensagem(`Digite todos os dados.`);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="area-input">
        <input
          ref={inputFocus}
          type="text"
          placeholder="Peso em (kg) Ex.: 80kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value.replace(/\D+/, '').slice(0,3))}
          onKeyPress={(e) => e.key === 'Enter' && calcularIMC()}
        />
        <input
          type="texts"
          placeholder="Altura em (cm) Ex.: 180cm"
          value={altura}
          onChange={(e) => setAltura(e.target.value.replace(/\D+/, '').slice(0,3))}
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
