import React from 'react'
interface AuthInputProps {
  newState: (state: string) => void, label: string
  IsPassword?: boolean
}

function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col justify-between items-start">
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.IsPassword ? "password" : "text"}
        id="email"
        onChange={(e) => props.newState(e.target.value)}
        className="border-gray-400 bordborder-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:border-b focus-visible:outline-none p-1" />
    </div>

  )
}

export default AuthInput
