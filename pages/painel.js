export default function Painel() {
  const conteudos = [
    {
      titulo: 'Planilha Close Friends VIP',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/27.png',
      link: 'https://fatosdabolsa.com.br/vip',
    },
    {
      titulo: 'Planilha Close Friends LITE 2.0',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/28.png',
      link: 'https://fatosdabolsa.com.br/lite2',
    },
    {
      titulo: 'Planilha Close Friends LITE',
      descricao: 'Planilha com todas as carteiras e relatórios',
      imagem: '/29.png',
      link: 'https://fatosdabolsa.com.br/lite',
    },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', background: '#f7f7f7' }}>
      <h1 style={{ marginBottom: '20px' }}>📁 Conteúdos Disponíveis</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
      }}>
        {conteudos.map((item, i) => (
          <div
            key={i}
            style={{
              width: '300px',
              height: '350px',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundImage: `url(${item.imagem})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              color: '#fff',
              padding: '20px',
              position: 'relative',
            }}
          >
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              borderRadius: '8px',
            }}>
              <h3 style={{ marginBottom: '8px', color: '#fff' }}>{item.titulo}</h3>
              <p style={{ fontSize: '14px', marginBottom: '12px' }}>{item.descricao}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#00c853',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
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
