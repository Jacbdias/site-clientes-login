export default function Imposto() {
  const ativos = [
    { ativo: 'PETR4', setor: 'Petróleo e Gás', peso: '15%' },
    { ativo: 'VALE3', setor: 'Mineração', peso: '10%' },
    { ativo: 'ITUB4', setor: 'Bancos', peso: '10%' },
    { ativo: 'BBAS3', setor: 'Bancos', peso: '8%' },
    { ativo: 'WEGE3', setor: 'Indústria', peso: '7%' },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>📊 Carteira - Imposto de Renda</h1>
      <p>Confira abaixo os ativos recomendados:</p>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Ativo</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Setor</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Peso na Carteira</th>
          </tr>
        </thead>
        <tbody>
          {ativos.map((item, i) => (
            <tr key={i}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.ativo}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.setor}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.peso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
