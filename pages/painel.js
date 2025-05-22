import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Painel() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const logado = localStorage.getItem('logado');
      if (logado !== 'true') {
        router.push('/');
      }
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Bem-vindo ao Painel do Cliente</h1>
      <p>Conteúdo exclusivo aqui.</p>
    </div>
  );
}
