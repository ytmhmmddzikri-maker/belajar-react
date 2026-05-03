import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response tidak ok")
        }
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Gagal memuat data, coba lagi!")
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: "0 20px" }}>
      <h1>Daftar User</h1>

      {loading && <p style={{ color: "#aaa" }}>Memuat data...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <h3>{user.name}</h3>
          <p style={{ color: "#666", fontSize: 14 }}>Email: {user.email}</p>
          <p style={{ color: "#666", fontSize: 14 }}>Kota: {user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default App