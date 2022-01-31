import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>Calculador IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="area-input">
      <input
      type="text"
      placeholder="Peso em (kg) Ex.: 80kg"
      />
      <input
      type="text"
      placeholder="Altura em (cm) Ex.: 180cm"
      />
      <button>Calcular</button>
      </div>
      <h2>Seu IMC foi 25. Você está acima do peso.</h2>
    </div>
  );
}
