import { useState } from "react"

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>
}

const LoginForm = ({onSubmit}:Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    await onSubmit(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
  )
}

export default LoginForm
