import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'cliente@email.com' && senha === '123456') {
      localStorage.setItem('logado', 'true');
      router.push('/painel');
    } else {
      alert('Dados inválidos');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Área Restrita</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}