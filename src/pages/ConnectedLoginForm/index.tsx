import api from "@/api"
import LoginForm from "../LoginForm"

const ConnectedLoginForm = () => {
  const handleSubmit = async (email: string, password: string) => {
    await api.login(email, password)
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  )
}

export default ConnectedLoginForm
