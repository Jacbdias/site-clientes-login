import Link from 'next/link';

export default function Painel() {
  const conteudos = [
    {
      titulo: 'Acesso ao Telegram',
      descricao: 'Entre no nosso canal exclusivo no Telegram',
      imagem: '/29.png',
      link: 'https://t.me/SEULINK',
    },
    {
      titulo: 'Imposto de Renda',
      descricao: 'Tudo sobre declaração de ativos na bolsa',
      imagem: '/27.png',
      link: '/imposto', // página interna
    },
    {
      titulo: 'Milhas Aéreas',
      descricao: 'Como lucrar com milhas e pontos',
      imagem: '/28.png',
      link: '/milhas', // 🔄 alterado para página interna
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
        {conteudos.map((item, i) => {
          const isInternal = item.link.startsWith('/');

          const CardContent = (
            <div key={i} style={{
              width: '300px',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <div
                style={{
                  height: '180px',
                  backgroundImage: `url(${item.imagem})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '10px 0' }}>{item.titulo}</h3>
                <p style={{ color: '#555', fontSize: '14px' }}>{item.descricao}</p>
                {isInternal ? (
                  <Link href={item.link}>
                    <a style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      padding: '10px 20px',
                      backgroundColor: '#00c853',
                      color: '#fff',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}>
                      Acessar
                    </a>
                  </Link>
                ) : (
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
                )}
              </div>
            </div>
          );

          return CardContent;
        })}
      </div>
    </div>
  );
}
