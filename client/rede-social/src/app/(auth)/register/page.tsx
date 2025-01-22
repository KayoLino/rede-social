'use client'

import React, { useState } from 'react'
import AuthInput from '../../components/AuthInput'
import Link from "next/link"
import { makeRequest } from '../../../../axios'
import AuthPage from '@/app/components/AuthPage'
import { useRouter } from 'next/navigation'

function Register() {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('');
  const router = useRouter();


  const handleRegister = (e: any) => {
    e.preventDefault();
    makeRequest.post("auth/register", { username, email, password, confirmPassword }).then(res => {
      console.log(res);
      router.push('/login');
    }).catch(err => {
      setError(err.response.data.msg)
    });
  }

  return (
    <AuthPage>
      <h1 className="font-bold text-2xl">REGISTRAR</h1>
      <AuthInput label="Nome:" newState={setUserName} />
      <AuthInput label="Email:" newState={setEmail} />
      <AuthInput label="Senha:" newState={setPassword} IsPassword />
      <AuthInput label="Confirme sua senha:" newState={setConfirmPassword} IsPassword />
      <button onClick={(e) => handleRegister(e)} className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800">Cadastrar-se</button>
      {error && <p className=" text-center text-red-500">{error}</p>}
      <Link href="/login" className="text-center underline">Já possui uma conta?</Link>
    </AuthPage>
  )
}

export default Register
