import { useEffect, useState } from 'react';

export default function Milhas() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.sheetbest.com/sheets/93c6d345-0cca-4e9a-aa07-feff20adbec5')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '10px' }}>✈️ Tabela de Milhas Aéreas</h1>
      <p style={{ marginBottom: '20px' }}>Confira abaixo os dados importados da sua planilha do Google Sheets:</p>

      <div style={{ borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead style={{ backgroundColor: '#e0f7fa' }}>
            <tr>
              {dados[0] && Object.keys(dados[0]).map((coluna, i) => (
                <th key={i} style={{
                  padding: '12px',
                  border: '1px solid #ccc',
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  color: '#00796b'
                }}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f1f8e9' }}>
                {Object.values(linha).map((valor, j) => (
                  <td key={j} style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    color: '#333'
                  }}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
