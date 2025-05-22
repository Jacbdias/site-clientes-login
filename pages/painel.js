export default function Painel() {
  const conteudos = [
    {
      titulo: 'Planilha Close Friends VIP',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/vip.png',
      link: 'https://fatosdabolsa.com.br/vip',
    },
    {
      titulo: 'Planilha Close Friends LITE 2.0',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/lite2.png',
      link: 'https://fatosdabolsa.com.br/lite2',
    },
    {
      titulo: 'Planilha Close Friends LITE',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/lite1.png',
      link: 'https://fatosdabolsa.com.br/lite',
    },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', background: '#f7f7f7' }}>
      <div style={{ marginBottom: '30px' }}>
        <img src="/banner-topo.png" alt="Banner" style={{ width: '100%', borderRadius: '10px' }} />
      </div>

      <h1 style={{ marginBottom: '20px' }}>📁 Conteúdos Disponíveis</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
      }}>
        {conteudos.map((item, i) => (
          <div key={i} style={{
            width: '300px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>
            <img src={item.imagem} alt={item.titulo} style={{ width: '100%' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '10px 0' }}>{item.titulo}</h3>
              <p style={{ color: '#555', fontSize: '14px' }}>{item.descricao}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#00c853',
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Acessar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}