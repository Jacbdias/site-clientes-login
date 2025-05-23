import { useEffect, useState } from 'react';

export default function Dividendos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.sheetbest.com/sheets/93c6d345-0cca-4e9a-aa07-feff20adbec5')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', background: '#f7f7f7', minHeight: '100vh' }}>
      <h1>📈 Dividendos</h1>
      <p style={{ marginBottom: '20px' }}>Veja abaixo os dados de dividendos da sua planilha:</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr>
            {dados.length > 0 &&
              Object.keys(dados[0]).map((coluna, i) => (
                <th key={i} style={{ padding: '10px', border: '1px solid #ccc' }}>{coluna}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, i) => (
            <tr key={i}>
              {Object.values(linha).map((valor, j) => (
                <td key={j} style={{ padding: '10px', border: '1px solid #ccc' }}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
