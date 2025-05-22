export default function Imposto() {
  const ativos = [
    { ativo: 'PETR4', setor: 'Petróleo', peso: '18%', logo: 'petr4.png' },
    { ativo: 'TAEE11', setor: 'Energia', peso: '15%', logo: 'taee11.png' },
    { ativo: 'BBAS3', setor: 'Financeiro', peso: '12%', logo: 'bbas3.png' },
    { ativo: 'ITSA4', setor: 'Financeiro', peso: '10%', logo: 'itsa4.png' },
    { ativo: 'EGIE3', setor: 'Energia', peso: '8%', logo: 'egie3.png' }
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', background: '#f7f7f7', minHeight: '100vh' }}>
      <h1>📊 Ativos da Carteira LITE</h1>
      <p style={{ marginBottom: '20px' }}>Veja abaixo os ativos que compõem a carteira atual:</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Ativo</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Setor</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Peso na Carteira</th>
          </tr>
        </thead>
        <tbody>
          {ativos.map((item, i) => (
            <tr key={i}>
              <td style={{ padding: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                <img
                  src={`/logos/${item.logo}`}
                  alt={item.ativo}
                  style={{ height: '20px', marginRight: '10px' }}
                />
                {item.ativo}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.setor}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.peso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

