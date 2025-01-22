'use client';

import Link from "next/link";
import { useState } from 'react';
import AuthPage from '../../components/AuthPage';
import AuthInput from '../../components/AuthInput';
import { makeRequest } from '../../../../axios';
import { useRouter } from 'next/navigation';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault()

    makeRequest.post("auth/login", { email, password }).then(res => {
      localStorage.setItem("rede-social:user", JSON.stringify(res.data.data.user));
      localStorage.setItem("rede-social:token", JSON.stringify(res.data.data.token));
      setError("");
      router.push("/");
    }).catch(err => {
      setError(err.response.data.msg);
    });
  }

  return (
    <AuthPage>
      <h1 className="font-bold text-2xl">LOGIN</h1>
      <AuthInput label="Email" newState={setEmail} />
      <AuthInput label="Senha" newState={setPassword} IsPassword />
      <button onClick={(e) => handleLogin(e)} className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800">Entrar</button>
      {error && <p className=" text-center text-red-400">{error}</p>}
      <Link href="/register" className="text-center underline">Cadastrar-se</Link>
    </AuthPage>
  )
}

export default Login;