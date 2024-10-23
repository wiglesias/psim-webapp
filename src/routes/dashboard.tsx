import api from "../services/api"

function Dashboard() {
  async function ping() {
    await api.ping()
  }
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={ping}>Ping</button>
    </>
  )
}

export default Dashboard
