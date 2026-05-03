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
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-lg mx-auto pt-16 px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar User</h1>
        <p className="text-gray-400 text-sm mb-8">Data dari JSONPlaceholder API</p>

        {loading && (
          <p className="text-center text-gray-400 py-16">Memuat data...</p>
        )}

        {error && (
          <p className="text-center text-red-400 py-16">{error}</p>
        )}

        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 mb-3">
            <h3 className="font-semibold text-gray-800 mb-1">{user.name}</h3>
            <p className="text-gray-500 text-sm">Email: {user.email}</p>
            <p className="text-gray-500 text-sm">Kota: {user.address.city}</p>
            <p className="text-gray-500 text-sm">Website: {user.website}</p>
          </div>
        ))}
      
      </div>
    </div>
  )
}
  
export default App