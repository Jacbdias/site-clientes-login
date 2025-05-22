// pages/lite.js

export default function LiteCarteira() {
  const ativos = [
    { codigo: 'TAEE11', setor: 'Energia', peso: '12%' },
    { codigo: 'ITSA4', setor: 'Financeiro', peso: '10%' },
    { codigo: 'BBAS3', setor: 'Bancos', peso: '8%' },
    { codigo: 'EGIE3', setor: 'Energia', peso: '7%' },
    { codigo: 'B3SA3', setor: 'Bolsa de Valores', peso: '6%' },
    { codigo: 'SAPR4', setor: 'Saneamento', peso: '5%' },
    { codigo: 'PETR4', setor: 'Petróleo', peso: '5%' },
    { codigo: 'ALUP11', setor: 'Energia', peso: '4%' },
    { codigo: 'WEGE3', setor: 'Industrial', peso: '4%' },
    { codigo: 'RAIZ4', setor: 'Combustíveis', peso: '3%' },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '20px' }}>📊 Carteira Close Friends LITE</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={th}>Código</th>
            <th style={th}>Setor</th>
            <th style={th}>Peso</th>
          </tr>
        </thead>
        <tbody>
          {ativos.map((ativo, index) => (
            <tr key={index}>
              <td style={td}>{ativo.codigo}</td>
              <td style={td}>{ativo.setor}</td>
              <td style={td}>{ativo.peso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left'
};

const td = {
  border: '1px solid #ccc',
  padding: '10px'
};
